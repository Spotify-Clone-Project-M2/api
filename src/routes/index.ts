// src/routes/index.ts
import express from 'express';
import authRouter from './auth.route';
import artistRouter from './artist.route';
import albumRouter from './album.route';
import trackRouter from './track.route';

const router = express.Router();

// Documentation Swagger et routes
/**
 * @swagger
 * /auth:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get auth resource
 *     responses:
 *       200:
 *         description: Auth resource
 */
router.use('/auth', authRouter);

/**
 * @swagger
 * /artists:
 *   get:
 *     tags:
 *       - Artists
 *     summary: Get artists resource
 *     responses:
 *       200:
 *         description: Artists resource
 */
router.use('/artists', artistRouter);
router.use('/album', albumRouter);
router.use('/track', trackRouter);

export default router;
