const newCardSchemaByManual = require("../../models/cards/cards")
const newCardSchemaByBank = require("../../models/cards/cardsBank")

const getAllCards = async (req, res) => {
    const cardsByBank = newCardSchemaByBank.find({email: req.params.email}, function(err1, result1) {
        if (err1) {
            console.log(err1);
        } else {
            const cardsByManual = newCardSchemaByManual.find({email: req.params.email}, function(err2, result2) {
                if (err2) {
                    console.log(err2);
                } else {
                    // console.log(result1.concat(result2));
                    let result = result1.concat(result2)
                    res.send(result)
                    // res.end(result2)
                }
            })
        }
    })
} 

module.exports = {getAllCards}