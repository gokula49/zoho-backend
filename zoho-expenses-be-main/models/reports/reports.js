const mongoose = require("mongoose")

const newReportSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    reportName: {
        type: String,
        required: true
    },
    businessPurpose: {
        type: String,
        max: 500
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    associateWithTrip: {
        type: String,
    },
    status: {
        type: String,
    },
    total: {
        type: String
    },
    tobeReimbursed: {
        type: String
    }
})


module.exports = mongoose.model('newReportSchema', newReportSchema)