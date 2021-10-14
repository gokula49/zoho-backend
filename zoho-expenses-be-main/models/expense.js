var mongoose=require('mongoose');

const expenseSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    expenses:[{
    exp_date:{
        type:String,
        required:true,
    },
    merchant:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    amounttype:{
        type:String,
        required:true,
    },
    amount:{
        type:String,
        required:true,
    },
    paid_through:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    reference:{
        type:String,
        required:true,
    },
    add_to_report:{
        type:String,
        required:true,
    },
    receipts:[]
    }]
    

});

module.exports=mongoose.model('Expense',expenseSchema);