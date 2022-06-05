const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const router = require('./routes/router');
const cors = require('cors');
const config = require('dotenv');
const { setConnection } = require('./db/database');

//Environment variables
config.config();

const port = process.env.PORT;

const app = express();

//DB Connection
setConnection();

app.use(bodyParser.json(), cors());

app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
