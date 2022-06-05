const mongoose = require('mongoose');

// Creating Post Schema
const postSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: function () {
            return Date.now();
        }
    },
    title: {
        type: String,
        required: [true, 'A title is required'],
        minlength: 1
    },
    message: {
        type: String,
        required: [true, 'Please enter content'],
        minlength: 1
    },
    imageURL: {
        type: String,
        default: null
    },
    comments: [
        {
            _id: {
                type: String,
                required: true
            },
            userId: {
                type: String,
                required: true
            },
            timeStamp: {
                type: Date,
                default: Date.now()
            },
            message: {
                type: String,
                required: [true, 'Please enter comment']
            }
        }
    ],
    turnOnComments: {
        type: Boolean,
        default: true
    },
    published: {
        type: Boolean,
        default: true
    },
    stringify: String,
    drink: {
        type: String,
        enum: ['Technology', 'Other']
    },
    upVote: {
        type: Number,
        default: 1
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
