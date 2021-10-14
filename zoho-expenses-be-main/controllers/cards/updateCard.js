const newCardSchemaByManual = require("../../models/cards/cards")
const newCardSchemaByBank = require("../../models/cards/cardsBank")

const updateManualCards = async (req, res) => {
    const currentCard = await newCardSchemaByManual.findOne({
        accountName: req.body.currentAccountName,
        email: req.body.email
    })
    const updateCard = await newCardSchemaByManual.updateOne({
        name: rea.body.currentAccountName
    },{
        email: req.body.email || currentAccountName.email,
        type: req.body.newType || currentCard.type,
        cardType: req.body.newCardType || currentCard.cardType,
        accountName: req.body.newAccountName || currentCard.accountName,
        currency: req.body.newCurrency || currentCard.currency,
        bankName: req.body.newBankName || currentCard.bankName,
        billingDate: req.body.newBillingDate || currentCard.billingDate,
        description: req.body.newDescription || currentCard.description
    })
    res.end(JSON.stringify(updateCard))
}

const updateBankCards = async (req, res) => {
    const currentCard = await newCardSchemaByBank.findOne({
        customerID: req.body.customerID,
        email: req.body.email
    })
    const updateCard = await newCardSchemaByBank.updateOne({
        customerID: req.body.customerID
    },{
        type: req.body.newType || currentCard.type,
        customerID: req.body.newCustomerID || currentCard.customerID,
        password: req.body.newPassword || currentCard.password
    })
    res.send(JSON.stringify(updateCard))
}

module.exports = {
    updateManualCards,
    updateBankCards
}