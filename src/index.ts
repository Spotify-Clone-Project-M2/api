import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import createError from 'http-errors';
import path from 'path';
import dotenv from 'dotenv';
import swaggerUIPath from 'swagger-ui-express';
import swaggerjsonFilePath from '../docs/swagger.json';
import indexRouter from './routes/index';
import sessionMiddleware from './middlewares/session';
import fileCacheMiddleware from './middlewares/fileCache';
import cacheMiddleware from './middlewares/cache';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const prisma = new PrismaClient();

app.use(sessionMiddleware);
app.use(fileCacheMiddleware);
app.use(cacheMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
});

app.use(
    '/api-docs',
    swaggerUIPath.serve,
    swaggerUIPath.setup(swaggerjsonFilePath),
);

export default app;
