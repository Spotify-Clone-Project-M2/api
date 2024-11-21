import express, { Request, Response } from 'express';

const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
const swaggerUIPath = require('swagger-ui-express');
const swaggerjsonFilePath = require('../docs/swagger.json');

const router = require('./routes/index.ts');

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(
  '/api-docs',
  swaggerUIPath.serve,
  swaggerUIPath.setup(swaggerjsonFilePath),
);

app
  .listen(PORT, () => {
    console.log('Server is running on address: http://localhost:' + PORT);
    console.log(
      'API documentation is running on address: http://localhost:' +
        PORT +
        '/api-docs',
    );
  })
  .on('error', (error: any) => {
    // gracefully handle error
    throw new Error(error.message);
  });

export {};

module.exports = app;
