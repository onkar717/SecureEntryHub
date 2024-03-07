const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    token: {
        type: String // Add token field to store JWT token
    }
});

const User = mongoose.model('USER', userSchema);
module.exports = User;
