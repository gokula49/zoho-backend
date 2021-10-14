const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: "reportid"
    },
    seq: {
        type: Number
    }
})

module.exports = {counterSchema}