const express = require('express');
const createError = require('http-errors');
const path = require('path');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
const swaggerUIPath = require('swagger-ui-express');
const swaggerjsonFilePath = require('../docs/swagger.json');
const router = express.Router();

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ping', (req: Request, res: any) => {
    res.send('pong');
});
app.use(
    '/api-docs',
    swaggerUIPath.serve,
    swaggerUIPath.setup(swaggerjsonFilePath),
);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: any) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log('Server is running on address: http://localhost:' + PORT);
    console.log(
        'API documentation is running on address: http://localhost:' +
            PORT +
            '/api-docs',
    );
}).on('error', (error: any) => {
    // gracefully handle error
    throw new Error(error.message);
});

export {};

module.exports = app;
