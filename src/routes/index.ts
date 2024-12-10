// src/routes/index.ts
import express from 'express';
import authRouter from './auth.route';
import artistRouter from './artist.route';
import albumRouter from './album.route';
import trackRouter from './track.route';
import playlistRouter from './playlist.route';

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
 * /artist:
 *   get:
 *     tags:
 *       - Artist
 *     summary: Get artist resource
 *     responses:
 *       200:
 *         description: Artist resource
 */
router.use('/artist', artistRouter);

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

/**
 * @swagger
 * /playlist-music:
 *   get:
 *     tags:
 *       - PlaylistMusic
 *     summary: Get playlist music resource
 *     responses:
 *       200:
 *         description: Playlist music resource
 */
router.use('/playlist', playlistRouter);

export default router;
