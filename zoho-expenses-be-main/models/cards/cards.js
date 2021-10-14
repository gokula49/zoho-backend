const mongoose = require("mongoose")

const newCardSchemaByManual = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    cardType: {
        type: String,
        required: true 
    },
    accountName: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    bankName: {
        type: String
    },
    billingDate: {
        type: String
    },
    description: {
        type: String,
        max: 500
    }
})


// const manualCardSchema = mongoose.model('newCardSchemaByManual', NewCardSchemaByManual)
// const bankCardSchema = mongoose.model('newCardSchemaByBank', NewCardSchemaByBank)

// module.exports = {
//     manualCardSchema: manualCardSchema,
//     bankCardSchema: bankCardSchema
// }
module.exports = mongoose.model('newCardSchemaByManual', newCardSchemaByManual)