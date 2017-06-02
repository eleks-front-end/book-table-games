const async = require('async'),
    mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

const schema = new Schema({
    timeFrom: {
        type: Date,
        required: true
    },
    timeTo: {
        type: Date,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    users: {
        type: Array,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

exports.Game = mongoose.model('Game', schema);
