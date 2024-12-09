import Redis from 'ioredis';

const redisClient = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD || undefined,
});

redisClient.on('error', (error) => {
    console.error('Redis error: ', error);
});

export default redisClient;
