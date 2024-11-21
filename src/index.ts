import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
<<<<<<< HEAD
import createError from 'http-errors';
import path from 'path';
import dotenv from 'dotenv';
import swaggerUIPath from 'swagger-ui-express';
import swaggerjsonFilePath from '../docs/swagger.json';
import indexRouter from './routes/index';
import sessionMiddleware from './middlewares/session';
import fileCacheMiddleware from './middlewares/fileCache';
import cacheMiddleware from './middlewares/cache';
=======
const createError = require('http-errors');
const path = require('path');
import logger from './logger';

const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
const swaggerUIPath = require('swagger-ui-express');
const swaggerjsonFilePath = require('../docs/swagger.json');

const router = require('./routes/index.ts');
>>>>>>> db28730 (feat: update index.ts)

dotenv.config();
import express, { Request, Response } from 'express';
const createError = require('http-errors');
const path = require('path');
import logger from './logger';
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT;
const prisma = new PrismaClient();

app.use(sessionMiddleware);
app.use(fileCacheMiddleware);
app.use(cacheMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    logger.error(err);

    logger.error(err);
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    logger.info(`Server running at PORT: ${PORT}`);
}).on('error', (error) => {
    logger.error(error);
});

app.use(
    '/api-docs',
    swaggerUIPath.serve,
    swaggerUIPath.setup(swaggerjsonFilePath),
);

<<<<<<< HEAD
export default app;
=======
app.listen(PORT, () => {
    logger.info('Server is running on address: http://localhost:' + PORT);
    logger.info(
        'API documentation is running on address: http://localhost:' +
            PORT +
            '/api-docs',
    );
}).on('error', (error: any) => {
    // gracefully handle error
    logger.error(error);
});

export {};

module.exports = app;
>>>>>>> db28730 (feat: update index.ts)
