var express = require('express');
var router = express.Router();

const {signup}=require('../controllers/signup')
const {login}=require('../controllers/login')
const {savetrip}=require('../controllers/trips')
const {deleteTrip}=require('../controllers/deletetrip')
const {saveadvance}=require('../controllers/advance')
const Cust= require('../models/Cust')
const Trip= require('../models/trips');
const Advance=require('../models/advance')
var tokenauth=require('../controllers/verifyToken');
const req = require('express/lib/request');
const advance = require('../models/advance');
const { expense } = require('../controllers/expense')
const { bulkexpenses } = require('../controllers/bulkexpenses')
// const { report } = require('../controllers/report')




// const Report = require('../models/report');


var tokenauth = require('../controllers/verifyToken');
const Expense = require('../models/expense');


// router.post('/sortexpenses', async (req, res) => {
//     console.log(req.body);
//     const userinfo = await Expense.findOne({ email: req.body.email });
//     console.log(userinfo.expenses);
//     const arr = userinfo.expenses;
//     const sorted=arr.filter(ex=>ex.category===req.body.category)
//     res.send(sorted);
// });

//reports functions
const {newReport} = require('../controllers/reports/newReport')
const {getAllReports} = require('../controllers/reports/getReports')
const {getPendingReports} = require('../controllers/reports/getReports')
const {getApprovedReports} = require('../controllers/reports/getReports')
const {updateReports} = require('../controllers/reports/updateReports')
const {bulkImport} = require('../controllers/reports/bulkImport')
const {deleteReport} = require('../controllers/reports/deleteReport')
const {getReportsByID} = require('../controllers/reports/getReports')
const {updateExpenseInReport} = require('../controllers/reports/updateReports')
const {updateAdvanceInReport} = require('../controllers/reports/updateReports')

//cards functions
const {newCorporateCardByManual} = require("../controllers/cards/newCard")
const {newPersonalCardByManual} = require("../controllers/cards/newCard")
const {newCorporateCardByBank} = require("../controllers/cards/newCard")
const {newPersonalCardByBank} = require("../controllers/cards/newCard")
const {getAllCards} = require("../controllers/cards/getCards")



router.post('/sortexpenses', async (req, res) => {
    // console.log(req.body);
    let a=1;
    const b="expenses."+req.body.field;
    if(req.body.order!=="asc"){
        a=-1;
    }
    Expense.aggregate([
        // Initial document match (uses index, if a suitable one is available)
        { $match: {
            email:req.body.email
        }},
    
        // Expand the scores array into a stream of documents
        { $unwind: '$expenses' },
    
        // Sort in descending order
        { $sort: {
            [b] : a
        }}
    ]).then(itm=>res.send(itm))
    .catch(err=>{
        console.log(err);
        res.send(err);
    })
    // res.send(sorted);
});


router.get('/getname/:mail', async (req, res) => {
    // console.log(req.params);
    const userinfo = await Cust.findOne({ email: req.params.mail });
    // console.log(userinfo);

    // res.send(userinfo.org_name);
});

router.get('/gettrip/:mail', async (req, res) => {
    // console.log(req.params);
    const tripinfo= await Trip.find({email:req.params.mail});
    // console.log(tripinfo);

    res.send(tripinfo);
});
router.get('/getindtrip/:id', async (req, res) => {
    // console.log(req.params);
    const tripinfo= await Trip.find({_id:req.params.id});
    // console.log(tripinfo);

    res.send(tripinfo);
});


router.delete('/trips/delete/:id', deleteTrip)






router.get('/getadvance/:mail',async (req,res)=>{
    // console.log(req.params);
    const advanceinfo= await Advance.find({email:req.params.mail});
    // console.log(advanceinfo);

    res.send(advanceinfo);
});
router.get('/getindadvance/:id', async (req, res) => {
    // console.log(req.params);
    const tripinfo= await Advance.find({_id:req.params.id});
    // console.log(tripinfo);

    res.send(tripinfo);
});



// router.get('/getreports/:mail', async (req, res) => {
//     // console.log(req.params);
//     const repinfo = await Report.findOne({ email: req.params.mail });
//     // console.log(repinfo);
//     const repname=[];
//     repinfo.reports.map(i=>repname.push(i.rep_name))
//     res.send(repname);
// });

router.get('/test', (req, res) => {
    // console.log("hello");
    res.send("working");
});
router.get('/getallexpenses/:mail', async (req, res) => {
    // console.log(req.params);
    const allexpenses = await Expense.findOne({ email: req.params.mail });
    // console.log(allexpenses.expenses);

    res.send(allexpenses.expenses);
});

router.get('/getallexpenses/:mail', async (req, res) => {
    // console.log(req.params);
    // console.log(req.headers.email);

    const allexpenses = await Expense.findOne({ email: req.params.mail });
    // console.log(allexpenses);
    
    res.send(allexpenses.expenses);
});

router.get('/getexpense/:email/:id', async (req, res) => {
    // console.log(req.params);
    // console.log(req.headers.email);
    let exp={};
    const allexpenses = await Expense.findOne({ email: req.params.email });
    allexpenses.expenses.map(i=>{
        if(i._id==req.params.id){
            exp=i;
        }
    })
    // console.log(exp);
    res.send(exp);
    // res.send(allexpenses.expenses);
});


router.post('/signup', signup);
router.post('/login', login);
router.post('/trip', savetrip);

router.post('/advance', saveadvance);
router.post('/newexpense', expense);
router.post('/bulkexpenses', bulkexpenses);
// router.post('/addreport', report);

// reports 
router.post('/reports/new', newReport)
router.get('/reports/:email', getAllReports)
router.get('/reports/pending', getPendingReports)
router.get('/reports/approved', getApprovedReports)
router.put('/reports/edit', updateReports)
router.post('/reports/bulkimport', bulkImport)
router.delete('/reports/delete/:email/:reportName', deleteReport)
router.get('/reports/:email/:_id', getReportsByID)
router.post('/reports/add/expense', updateExpenseInReport)
router.post('/reports/add/advance', updateAdvanceInReport)

//cards
router.post('/cards/new/corporate/manual', newCorporateCardByManual)
router.post('/cards/new/personal/manual', newPersonalCardByManual)
router.post('/cards/new/corporate/bank', newCorporateCardByBank)
router.post('/cards/new/personal/bank', newPersonalCardByBank)
router.get('/cards/:email', getAllCards)




module.exports = router;
