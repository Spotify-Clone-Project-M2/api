import express from 'express';
import authRoute from './auth.route';
import artistRoute from './artist.route';
import albumRoute from './album.route';
import playlistRoute from './playlist.route';

const router = express.Router();

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
router.use('/auth', authRoute);

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
router.use('/artist', artistRoute);

/**
 * @swagger
 * /album:
 *   get:
 *     tags:
 *       - Album
 *     summary: Get album resource
 *     responses:
 *       200:
 *         description: Album resource
 */
router.use('/album', albumRoute);

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
router.use('/playlist', playlistRoute);

export default router;
