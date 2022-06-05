const jwt = require('jsonwebtoken');
const Client = require('../models/client');
const config = require('dotenv');

//Environment variables
config.config();

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace(/"/g, '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(token);
        const client = await Client.findOne({
            _id: decoded._id,
            'tokens.token': token
        });

        if (!client) {
            throw new Error();
        }

        req.token = token;
        req.user = client;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Authorization needed, please log in' });
    }
};

module.exports = auth;
