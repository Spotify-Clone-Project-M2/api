import { Request, Response, NextFunction } from 'express';
import redisClient from '../conf/redisClient';

const cacheMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    const key = req.originalUrl;

    try {
        const cachedResponse = await redisClient.get(key);
        if (cachedResponse) {
            res.json(JSON.parse(cachedResponse));
            return;
        }

        (res as any).sendResponse = res.json.bind(res);
        res.json = (body) => {
            redisClient.set(key, JSON.stringify(body));
            return (res as any).sendResponse(body);
        };

        next();
    } catch (error) {
        console.error('Cache middleware error:', error);
        next();
    }
};

export default cacheMiddleware;
