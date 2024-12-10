import express from 'express';
import authRoute from './auth.route';
import artistRoute from './artist.route';

const router = express.Router();

router.use(
    '/auth',
    authRoute,
    /* 
  #swagger.tags = ['Auth']     
  #swagger.security = [{         
      "apiKeyAuth": []            
  }] 
  */
);

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

export default router;
