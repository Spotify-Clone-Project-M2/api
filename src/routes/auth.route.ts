import express, { Request, Response } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', (req: Request, res: Response) => {
    console.log('Register route hit');

    /* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Endpoint to register a new user'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      email: 'string',
      password: 'string',
      name: 'string'
    }
  }
  #swagger.responses[201] = {
    description: 'User registered successfully',
    schema: { $ref: '#/definitions/successResponse.200' }
  }
  #swagger.responses[400] = {
    description: 'Bad request',
    schema: { $ref: '#/definitions/errorResponse.400' }
  }
  #swagger.responses[500] = {
    description: 'Internal server error',
    schema: { $ref: '#/definitions/errorResponse.500' }
  }
  */
    register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    /* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Endpoint to login a user'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      email: 'string',
      password: 'string'
    }
  }
  #swagger.responses[200] = {
    description: 'Login successful',
    schema: { $ref: '#/definitions/successResponse.200' }
  }
  #swagger.responses[400] = {
    description: 'Bad request',
    schema: { $ref: '#/definitions/errorResponse.400' }
  }
  #swagger.responses[401] = {
    description: 'Unauthorized',
    schema: { $ref: '#/definitions/errorResponse.401' }
  }
  #swagger.responses[500] = {
    description: 'Internal server error',
    schema: { $ref: '#/definitions/errorResponse.500' }
  }
  */
    login(req, res);
});

router.get('/', (req: Request, res: Response) => {
    /* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Endpoint to test auth route'
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/successResponse.200' }
  }
  #swagger.responses[400] = {
    schema: { $ref: '#/definitions/errorResponse.400' }
  }
  #swagger.responses[401] = {
    schema: { $ref: '#/definitions/errorResponse.401' }
  }
  */
    res.send('respond with a resource');
});

export default router;
