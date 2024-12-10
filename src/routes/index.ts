const express = require('express');
const authRoute = require('./auth.route');
const trackRoute = require('./track.route');

const router = express.Router();

router.use('/auth', authRoute);

router.use('/track', trackRoute);

module.exports = router;
