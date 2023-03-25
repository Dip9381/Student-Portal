const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

let detail=require("./authenticate");
const leave_info=require("./leave_info");
let atten=require("./attendance");


app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/db", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

const router = express.Router();
app.use("/", router);
// router.route("/getauthenticate").get(function(req, res) {
//     detail.find({name:"20bps1142"})
//   .then(result => {
//     res.send(result);
//     console.log(req);
//   })
//   .catch(err => {
//     res.send(err);
//   });
//   });

  app.get('/getauthenticate',(req,res)=>{
    // console.log(req.query);
    detail.find({name:"20bps1142"})
    .then(result => {
      res.send(result);
  })
  .catch(err => {
    res.send(err);
  });
  })
  app.get('/getattendance',(req,res)=>{
    // console.log(req.query.Subject1);
    // console.log(res);
    let sub1=req.query.Subject1;
    let sub2=req.query.Subject2;
    atten.find({"reg_no.reg":"20bps1142"})
    .then(result =>{
      
      res.send(result);
      // console.log(result);
    })
  })


app.use("/",router);
// app.route("/getattendance").get(function(req,res){
//   atten.find({Subject:"Java"}).then(result =>{
//     res.send(result[0]);
//     console.log(result[0].reg_no['20bps1142']['present']);
//   })
//   .catch(err =>{
//     res.end(err);
//   })
// })
  app.use(express.json())
 app.post("/leave_info",(req,res)=>{
    const data=new leave_info({
      reg_no:req.body.reg_no,
      Name:req.body.Name,
      start_date:req.body.start_date,
      end_date:req.body.end_date,
      reason:req.body.reason,
      reason_Desp:req.body.reason_Desp
    });
      data.save().then((doc)=>{
        console.log(doc);
      }).catch((err)=>console.log(err));
    // res.json(val);
    // console.log(req);
  })