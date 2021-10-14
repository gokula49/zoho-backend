var mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    org_name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
        min:10,
        max:12
    }

});

module.exports=mongoose.model('Cust',userSchema);