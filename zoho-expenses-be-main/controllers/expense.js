const Expense = require('../models/expense');

const expense = async (req, res) => {
    // console.log(req.body);
    const { email,merchant, exp_date, category,amounttype, amount, paid_through, description, reference, add_to_report,receipts } = req.body;
    const emailvalid= await Expense.findOne({email:email});
    if(!emailvalid){
        const exp = new Expense({
                email,expenses:[{exp_date, merchant, category,amounttype, amount, paid_through, description, reference, add_to_report,receipts}]
        })
        // console.log(exp);
        const savedExpense = await exp.save();
        // console.log(savedExpense);
        console.log("saved dacoments-------------------------------");
        return res.send("sucess");
    }else{
        const newexpense={exp_date, merchant, category,amounttype, amount, paid_through, description, reference, add_to_report,receipts}
        const result=Expense.findOneAndUpdate(
            { email:email }, 
            { $push: { expenses:  newexpense} },
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

module.exports = { expense };
