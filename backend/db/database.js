const mongoose = require('mongoose');
const config = require('dotenv');

//Environment variables
config.config();

function setConnection() {
    //DB Connection
    mongoose
        .connect(process.env.DB_CON, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((err) => {
            console.log('Connection failed');
        });
}

module.exports = { setConnection };
