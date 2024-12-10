import express from 'express';
import authRoute from './auth.route';
import artistRoute from './artist.route';
import albumRoute from './album.route';
import userRoute from './user.route';

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

router.use(
    '/artists',
    artistRoute,
    /* 
  #swagger.tags = ['Artists']     
  #swagger.security = [{         
      "apiKeyAuth": []            
  }] 
  */
);

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
 * /users:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user resource
 *     responses:
 *       200:
 *         description: User resource
 */
router.use('/users', userRoute);

export default router;
