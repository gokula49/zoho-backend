const Advance=require('../models/advance')

const saveadvance= async(req,res)=>{
    const advance=new Advance({
        email:req.body.email,
        amount:req.body.amount,
        date:req.body.date,
        paid_through:req.body.paid_through,
        references:req.body.references,
        notes:req.body.notes,
        apply_to_trip:req.body.apply_to_trip
       
    })

    try {
        
        const Saveadvance = await advance.save();
        // console.log(Saveadvance);
        // return res.send("sucessfully saved");
        res.end(Saveadvance)
    } catch (err) {
        return res.status(400).json(err);
    }
};
module.exports={saveadvance};