const express = require('express');
const authRoute = require('./auth.route');
const trackRoute = require('./track.route');
import artistRoute from './artist.route';
import albumRoute from './album.route';

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

router.use('/track', trackRoute);

export default router;
