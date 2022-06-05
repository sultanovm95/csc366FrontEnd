const express = require('express');
const clientRoute = require('./clientRoute');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Calling: ', req.path);
    next();
});

router.get('/', (req, res, next) => {
    res.send('Hello, from main');
});

router.use(clientRoute);

module.exports = router;
