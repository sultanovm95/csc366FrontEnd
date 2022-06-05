const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('dotenv');

//Environment variables
config.config();

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    drink: {
        type: String,
        enum: ['Doctor', 'Client'],
        default: 'Client'
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number');
            }
        }
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

clientSchema.methods.toJSON = function () {
    const client = this;
    const clientObject = client.toObject();

    delete clientObject.password;
    delete clientObject.tokens;

    return clientObject;
};

clientSchema.methods.generateAuthToken = async function () {
    const client = this;
    const token = jwt.sign(
        { _id: client._id.toString() },
        process.env.JWT_SECRET
    );

    client.tokens = client.tokens.concat({ token });
    await client.save();

    return token;
};

clientSchema.statics.findByCredentials = async (email, password) => {
    const client = await Client.findOne({ email });

    if (!client) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, client.password);

    if (!isMatch) {
        throw new Error('Unable to login');
    }

    return client;
};

// Hash password, before saving
clientSchema.pre('save', async function (next) {
    const client = this;

    if (client.isModified('password')) {
        client.password = await bcrypt.hash(client.password, 8);
    }
    next();
});

// Delete user tasks when user is removed
// userSchema.pre('remove', async function (next) {
//     const user = this
//     await Task.deleteMany({ owner: user._id })
//     next()
// })

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
