var mongoose = require('mongoose');

const repSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    reports: [{
        rep_name: {
            type: String,
            required: true,
        },
        purpose: {
            type: String,
            required: true,
        },
        start_dur: {
            type: String,
            required: true,
        },
        end_dur: {
            type: String,
            required: true,
        },
        ast_trip: {
            type: String,
            required: true,
        }
    }]

});

module.exports = mongoose.model('Report', repSchema);