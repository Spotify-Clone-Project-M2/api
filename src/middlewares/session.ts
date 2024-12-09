import session from 'express-session';
import connectRedis from 'connect-redis';
import redisClient from '../conf/redisClient';

const RedisStore = connectRedis(session);

const sessionMiddleware = session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 1000 }, // 1 hour
});

export default sessionMiddleware;
