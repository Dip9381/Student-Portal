const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

let detail=require("./authenticate");
const leave_info=require("./leave_info");


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
router.route("/getauthenticate").get(function(req, res) {
    detail.find({name:"20bps1142"})
  .then(result => {
    res.send(result[0]);
  })
  .catch(err => {
    res.send(err);
  });
  });
  app.use(express.json())
 app.post("/leave_info",(req,res)=>{
    const data=new leave_info({
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