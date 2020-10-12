const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const DiaperSchema = new Schema({
    pee: {
        type: Boolean,
        required: false
    },
    poop: {
        type: Boolean,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    changing_time: {
        type: String,
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

module.exports = Diaper = mongoose.model('diaper', DiaperSchema);