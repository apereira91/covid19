const mongoose = require('mongoose');

const checkSchema = new mongoose.Schema({
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Check', checkSchema);

