const trips = require('../models/trips');
const Trip= require('../models/trips');
var db=require('../index')
// var a=2;

// var sequential = require("sequential-ids");
 
// var generator = new sequential.Generator({
//   digits: 6, letters: 3,
//   // store: function(key, ids) {
//   //   // db.store(key, ids[ids.length - 1]);
//   // },
//   restore: "TRIPS -"+a
// });
 

// trip_id=generator.generate()
// generator.start();
// console.log(generator.generate());
// console.log(generator.generate());            // => AAB - 001
          
const savetrip= async(req,res)=>{
    
    
    
    const trip=new Trip({
        
        email:req.body.email,
        // trip_no:trip_id,
        travel_type:req.body.travel_type,
        trip_name:req.body.trip_name,
        trip_destination:req.body.trip_destination,
        trip_visa:req.body.trip_visa,
        business_purpose:req.body.business_purpose,
        flight:req.body.flight2,
        hotel:req.body.hotel2,
        car:req.body.car2,
        bus:req.body.bus2,
        train:req.body.train2,
        status:"approved",
        approver:req.body.email
    })
    


    try {
        
        const Savetrip = await trip.save();
        // console.log(Savetrip);
        // return res.send("sucessfully saved");
    } catch (err) {
        return res.status(400).json(err);
    }
};

module.exports={savetrip};