const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const WellCareSchema = new Schema({
    height: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    document: {
        type: Object,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    userId: {
        type: String,
        required: true
    }


});

module.exports = WellCare = mongoose.model('well-care', WellCareSchema);