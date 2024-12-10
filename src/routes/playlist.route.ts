import express from 'express';
import {
    createPlaylistMusic,
    getPlaylistMusics,
    getPlaylistMusicById,
    updatePlaylistMusic,
    deletePlaylistMusic,
} from '../controllers/playlist.controller';

const router = express.Router();

/**
 * @swagger
 * /playlist:
 *   post:
 *     tags:
 *       - PlaylistMusic
 *     summary: Create a new playlist music
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Playlist Title
 *               userId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Playlist music created successfully
 *       500:
 *         description: Error creating playlist music
 */
router.post('/', createPlaylistMusic);

/**
 * @swagger
 * /playlist:
 *   get:
 *     tags:
 *       - PlaylistMusic
 *     summary: Get all playlist musics
 *     responses:
 *       200:
 *         description: List of playlist musics
 *       500:
 *         description: Error fetching playlist musics
 */
router.get('/', getPlaylistMusics);

/**
 * @swagger
 * /playlist/{id}:
 *   get:
 *     tags:
 *       - PlaylistMusic
 *     summary: Get a playlist music by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Playlist music details
 *       404:
 *         description: Playlist music not found
 *       500:
 *         description: Error fetching playlist music
 */
router.get('/:id', getPlaylistMusicById);

/**
 * @swagger
 * /playlist/{id}:
 *   put:
 *     tags:
 *       - PlaylistMusic
 *     summary: Update a playlist music by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Playlist Title
 *               userId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Playlist music updated successfully
 *       500:
 *         description: Error updating playlist music
 */
router.put('/:id', updatePlaylistMusic);

/**
 * @swagger
 * /playlist/{id}:
 *   delete:
 *     tags:
 *       - PlaylistMusic
 *     summary: Delete a playlist music by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Playlist music deleted successfully
 *       500:
 *         description: Error deleting playlist music
 */
router.delete('/:id', deletePlaylistMusic);

export default router;
