const Cust = require('../models/Cust');
// const jwt = require('jsonwebtoken');


const signup = async (req, res) => {

    const cust = new Cust({
        org_name: req.body.orgname,
        email: req.body.email,
        password: req.body.pwd,
        country: req.body.country,
        state: req.body.state,
        Phone: req.body.phone
    })
    // console.log(req.body)
    // console.log(cust);
    try {
  
        console.log("initiating save command -------------------------");
        const savedUser = await cust.save();
        console.log(savedUser);
        console.log("saved dacoments-------------------------------");
        return res.send("sucess");
    } catch (err) {
        // console.log(err,"-------------------------error");
        return res.status(400).json(err);
    }
};


module.exports = { signup };