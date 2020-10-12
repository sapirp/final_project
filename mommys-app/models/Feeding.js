const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FeedingSchema = new Schema({
    breast_feeding: {
        type: Boolean,
        required: false,
        default: false
    },
    bottle: {
        type: Boolean,
        required: false,
        default: false
    },
    left_side: {
        type: Boolean,
        required: false
    },
    right_side: {
        type: Boolean,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    }


});

module.exports = Feeding = mongoose.model('feeding', FeedingSchema);