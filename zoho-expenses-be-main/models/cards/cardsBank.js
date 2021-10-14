const mongoose = require("mongoose")

const newCardSchemaByBank = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    customerID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('newCardSchemaByBank', newCardSchemaByBank)