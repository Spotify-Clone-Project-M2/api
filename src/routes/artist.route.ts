import express from 'express';
import {
    createArtist,
    getArtists,
    getArtistById,
    updateArtist,
    deleteArtist,
} from '../controllers/artist.controller';

const router = express.Router();

/**
 * @swagger
 * /artist:
 *   post:
 *     tags:
 *       - Artist
 *     summary: Create a new artist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Artist Name
 *     responses:
 *       201:
 *         description: Artist created successfully
 *       500:
 *         description: Error creating artist
 */
router.post('/', createArtist);

/**
 * @swagger
 * /artist:
 *   get:
 *     tags:
 *       - Artist
 *     summary: Get all artists
 *     responses:
 *       200:
 *         description: List of artists
 *       500:
 *         description: Error fetching artists
 */
router.get('/', getArtists);

/**
 * @swagger
 * /artist/{id}:
 *   get:
 *     tags:
 *       - Artist
 *     summary: Get an artist by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Artist details
 *       404:
 *         description: Artist not found
 *       500:
 *         description: Error fetching artist
 */
router.get('/:id', getArtistById);

/**
 * @swagger
 * /artist/{id}:
 *   put:
 *     tags:
 *       - Artist
 *     summary: Update an artist by ID
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
 *               name:
 *                 type: string
 *                 example: Updated Artist Name
 *     responses:
 *       200:
 *         description: Artist updated successfully
 *       500:
 *         description: Error updating artist
 */
router.put('/:id', updateArtist);

/**
 * @swagger
 * /artist/{id}:
 *   delete:
 *     tags:
 *       - Artists
 *     summary: Delete an artist by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Artist deleted successfully
 *       500:
 *         description: Error deleting artist
 */
router.delete('/:id', deleteArtist);

export default router;
