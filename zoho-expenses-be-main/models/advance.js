var mongoose=require('mongoose');


const advanceSchema=new mongoose.Schema({
    email:{
        type:String
    },
    amount:{
        type:Number
    },
    date:{
        type:String
    },
    paid_through:{
        type:String
    },
    references:{
        type:String
    },
    notes:{
        type:String
    },
    apply_to_trip:{
        type:Object
    }


})
module.exports=mongoose.model('Advance',advanceSchema)