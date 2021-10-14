const Report = require('../models/report')

const report = async (req, res) => {
    const {email,rep_name,purpose,start_dur,end_dur,ast_trip}=req.body;
    const emailvalid= await Report.findOne({email:email});
    if(!emailvalid){
        const rep = new Report({
                email,reports:[{rep_name,purpose,start_dur,end_dur,ast_trip}]
        })
        // console.log(rep);
        const savedReport = await rep.save();
        // console.log(savedReport);
        console.log("saved dacoments-------------------------------");
        return res.send("sucess");
    }else{
        const result=Report.findOneAndUpdate(
            { email:email }, 
            { $push: { reports: { rep_name,purpose,start_dur,end_dur,ast_trip } } },
            {useFindAndModify: false},
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("added report");
                    res.send("updated report");
                }
            }
        );
    }
};


module.exports = { report };