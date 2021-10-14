const Cust = require('../models/Cust');
const jwt = require('jsonwebtoken');

const login=async (req,res)=>{
    // const response=loginUser(req.body);
    // if(response.error) 
    //     return res.status(400).send(response.error.details[0].message);
    // console.log('no');
    const emailvalid= await Cust.findOne({email:req.body.email});
    if(!emailvalid)return res.status(400).send("Email not exists");

    if(req.body.pwd!=emailvalid.password)return res.status(400).send("Password wrong");
    // var msg=await bcrypt.compare(req.body.password, emailvalid.password);
    // console.log(msg);
    // if(!msg)return res.status(400).send("Password wrong");

    const token=jwt.sign({_id:emailvalid.id},process.env.tokenkey);
    res.header('auth-token',token).send({token:token,email:req.body.email});

    // res.send("loged in");
      
}

module.exports = { login };
