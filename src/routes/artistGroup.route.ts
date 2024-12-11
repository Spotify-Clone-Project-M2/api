import express from 'express';
import {
    createArtistGroup,
    getArtistGroups,
    getArtistGroupById,
    updateArtistGroup,
    deleteArtistGroup,
} from '../controllers/artistGroup.controller';

const router = express.Router();

/**
 * @swagger
 * /artist-group:
 *   post:
 *     tags:
 *       - ArtistGroup
 *     summary: Create a new artist group
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Artist Group Title
 *     responses:
 *       201:
 *         description: Artist group created successfully
 *       500:
 *         description: Error creating artist group
 */
router.post('/', createArtistGroup);

/**
 * @swagger
 * /artist-group:
 *   get:
 *     tags:
 *       - ArtistGroup
 *     summary: Get all artist groups
 *     responses:
 *       200:
 *         description: List of artist groups
 *       500:
 *         description: Error fetching artist groups
 */
router.get('/', getArtistGroups);

/**
 * @swagger
 * /artist-group/{id}:
 *   get:
 *     tags:
 *       - ArtistGroup
 *     summary: Get an artist group by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Artist group details
 *       404:
 *         description: Artist group not found
 *       500:
 *         description: Error fetching artist group
 */
router.get('/:id', getArtistGroupById);

/**
 * @swagger
 * /artist-group/{id}:
 *   put:
 *     tags:
 *       - ArtistGroup
 *     summary: Update an artist group by ID
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
 *                 example: Updated Artist Group Title
 *     responses:
 *       200:
 *         description: Artist group updated successfully
 *       500:
 *         description: Error updating artist group
 */
router.put('/:id', updateArtistGroup);

/**
 * @swagger
 * /artist-group/{id}:
 *   delete:
 *     tags:
 *       - ArtistGroup
 *     summary: Delete an artist group by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Artist group deleted successfully
 *       500:
 *         description: Error deleting artist group
 */
router.delete('/:id', deleteArtistGroup);

export default router;
