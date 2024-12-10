import express from 'express';
import {
    createMusicAlbum,
    getMusicAlbums,
    getMusicAlbumById,
    updateMusicAlbum,
    deleteMusicAlbum,
} from '../controllers/album.controller';

const router = express.Router();

/**
 * @swagger
 * /album:
 *   post:
 *     tags:
 *       - Album
 *     summary: Create a new music album
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Album Title
 *               artisteId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Music album created successfully
 *       500:
 *         description: Error creating music album
 */
router.post('/', createMusicAlbum);

/**
 * @swagger
 * /album:
 *   get:
 *     tags:
 *       - Album
 *     summary: Get all music albums
 *     responses:
 *       200:
 *         description: List of music albums
 *       500:
 *         description: Error fetching music albums
 */
router.get('/', getMusicAlbums);

/**
 * @swagger
 * /album/{id}:
 *   get:
 *     tags:
 *       - Album
 *     summary: Get a music album by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Music album details
 *       404:
 *         description: Music album not found
 *       500:
 *         description: Error fetching music album
 */
router.get('/:id', getMusicAlbumById);

/**
 * @swagger
 * /album/{id}:
 *   put:
 *     tags:
 *       - Album
 *     summary: Update a music album by ID
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
 *                 example: Updated Album Title
 *               artisteId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Music album updated successfully
 *       500:
 *         description: Error updating music album
 */
router.put('/:id', updateMusicAlbum);

/**
 * @swagger
 * /album/{id}:
 *   delete:
 *     tags:
 *       - Album
 *     summary: Delete a music album by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Music album deleted successfully
 *       500:
 *         description: Error deleting music album
 */
router.delete('/:id', deleteMusicAlbum);

export default router;
