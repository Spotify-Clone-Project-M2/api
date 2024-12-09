import { Request, Response, NextFunction } from 'express';
import redisClient from '../conf/redisClient';
import fs from 'fs';
import path from 'path';

const fileCacheMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    const filePath = path.join(__dirname, '..', 'public', req.path);

    try {
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath);
            const key = `file:${req.path}`;

            const cachedFile = await redisClient.getBuffer(key);
            if (cachedFile) {
                res.setHeader('Content-Type', 'application/octet-stream');
                res.send(cachedFile);
                return;
            }

            await redisClient.set(key, fileContent, 'EX', 60 * 60 * 24); // Cache for 1 day
            res.setHeader('Content-Type', 'application/octet-stream');
            res.send(fileContent);
            return;
        }

        next();
    } catch (error) {
        console.error('File cache middleware error:', error);
        next();
    }
};

export default fileCacheMiddleware;
