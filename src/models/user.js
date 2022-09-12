const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    rol: {
        type: String,
        required: true,
        default: "USER",
        enum: ["USER", "ADMIN"]
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);