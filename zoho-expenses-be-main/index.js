var express = require('express');
var app = express();
var multer = require('multer');
var trip =require('./controllers/trips')
var tokenauth=require('./controllers/verifyToken');

var routes=require('./routes/index.js');

var routes=require('./routes/index.js');
app.use(express.json());

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

// app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
var dotenv=require('dotenv');
var mongoose=require('mongoose');
const trips = require('./models/trips');
 

dotenv.config();
app.use(cors());

mongoose.connect(process.env.db_con1,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
   console.log("db connected....");
})
mongoose.set('useFindAndModify', false)
app.use('/api',routes);




// File upload settings  
const PATH = './uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

let upload = multer({
  storage: storage
});


// POST File
app.post('/api/upload', upload.array('bills'), function (req, res) {
   console.log(req.files);
   if (!req.file) {
     console.log("No file is available!");
     return res.send({
       success: false
     });
 
   } else {
     console.log('File is available!');
     return res.send({
       success: true
     })
   }
 });


// var db=mongoose.connect(process.env.db_con1,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
//    console.log("db connected....");
// })

// var query = trips.find();
// console.log(trips.estimatedDocumentCount)
// query.count(function (err, count) {
//    if (err) console.log(err)
//    else console.log("Count is", count+1)

// });


app.get('/', function(req, res){
   console.log("App");

   res.send("Hello world!");
});

app.use('/api',routes);

// var a=db.trip.find().Count()+1




app.listen(server_port, server_host,()=>{
    console.log("App listeing on 3000");
});
