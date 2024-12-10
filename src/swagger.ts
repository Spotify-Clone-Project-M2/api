const generateSwagger = require('swagger-autogen')();
const dotenv = require('dotenv');
dotenv.config();

const doc = {
    info: {
        version: '1.0.0',
        title: 'Spotify API',
        description: 'Spotify API Documentation',
    },
    host: 'localhost:' + process.env.PORT,
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Auth',
            description: 'auth related apis',
        },
        {
            name: 'Track',
            description: 'track related apis',
        },
    ],
    securityDefinitions: {},
    definitions: {
        'successResponse.200': {
            code: 200,
            message: 'Success',
        },
        'errorResponse.400': {
            code: 400,
            message:
                'The request was malformed or invalid. Please check the request parameters.',
        },
        'errorResponse.401': {
            code: 401,
            message:
                'Authentication failed or user lacks proper authorization.',
        },
        'errorResponse.403': {
            code: 403,
            message: 'You do not have permission to access this resource.',
        },
        'errorResponse.404': {
            code: 404,
            message: 'The requested resource could not be found on the server.',
        },
        'errorResponse.500': {
            code: 500,
            message:
                'An unexpected error occurred on the server. Please try again later.',
        },

        // files
        file: {
            type: 'object',
            properties: {
                file: {
                    type: 'file',
                    description: 'Fichier à uploader',
                    in: 'formData',
                },
            },
            required: ['file'],
        },
    },
};

const outputFile = '../docs/swagger.json';
const routes = [
    './routes/index.ts',
    './routes/auth.route.ts',
    './routes/track.route.ts',
];

generateSwagger(outputFile, routes, doc);
