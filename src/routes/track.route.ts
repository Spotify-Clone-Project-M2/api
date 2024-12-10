import express, { Request, Response } from 'express';
const router = express.Router();
import trackController from '../controllers/track.controller';
import { uploadImage } from '../CDN/image';
import { uploadAudio } from '../CDN/audio';

router.post(
    '/',
    // uploadImage,
    uploadAudio,
    /*
        #swagger.tags = ['Track']
        #swagger.description = 'Endpoint to upload track'
		    #swagger.path = '/track'
        #swagger.responses[200]= {
              schema: { $ref: '#/definitions/successResponse.200' }
          }
        #swagger.responses[400] = {
          schema: { $ref: "#/definitions/errorResponse.400" }
        }
        #swagger.responses[401] = {
          schema: { $ref: "#/definitions/errorResponse.401" }
        }
	*/
    trackController.createTrack,
);

module.exports = router;
