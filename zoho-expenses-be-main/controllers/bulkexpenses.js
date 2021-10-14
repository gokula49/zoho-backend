const Expense = require('../models/expense');

const bulkexpenses = async (req, res) => {
    // console.log(req.body);
    const {email,bulkexpenses}=req.body;
    // res.send(req.body);
    const emailvalid= await Expense.findOne({email:email});
    if(!emailvalid){
        const exp = new Expense({
            email,expenses:[...bulkexpenses]
        })
        // console.log(exp);
        const savedExpense = await exp.save();
        // console.log(savedExpense);
        console.log("saved dacoments-------------------------------");
        return res.send("sucess");
    }else{
        const result=Expense.findOneAndUpdate(
            { email:email }, 
            { $push: { expenses: { $each: bulkexpenses} } },
            {useFindAndModify: false},
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("added expense");
                    res.send("updated");
                }
            }
        );
    }
}

module.exports = { bulkexpenses };
