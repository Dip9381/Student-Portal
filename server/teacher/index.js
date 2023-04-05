const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4001;
const mongoose = require("mongoose");
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Teachersdb", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

let details=require("./details");
// const proctee = require("./proctees");

const router = express.Router();
app.use(express.json());
 app.post('/teachergetauthenticate',async (req,res)=>{
    const {teacherid,password}=req.body;
    await details.find({teacherid:teacherid})
    .then((result)=>{
    //   console.log(teacherid);
      if((typeof result[0])==="undefined")
      res.json("notexist");
      else if(result[0].pin==password)
      res.json("exist");
      else
      res.json("notexist");

    })
    .catch((err)=>{
      console.log(err);
    })
  })
  let proctee=require("./proctees")
  app.use("/",router);
  app.get('/getproctee',(req,res)=>{
    // console.log(req.query);
    proctee.find({teacher_id:req.query.user})
    .then((result)=>{
      let dat=[];
      // console.log(result);
      typeof result[0]!=="undefined"?
      (
        Promise.all(
        result[0].proctee.map(e=>{
          let id=e.id;
          return leave_info.find({reg_no:id})
        })
      )
      .then((results)=>{
          // if(result.length!==0)
        results.forEach((result)=>{
        dat.push(result);
        })
        // console.log(dat);
        res.send(dat);
      })   
        )
      :console.log("")
    })
    .catch(err=>{
      console.log(err);
    })
  
  })


  let leave_info=require('./leave_info')

  app.use(express.json())
 app.post("/leave_info",(req,res)=>{
  console.log(req.body);
    const data=new leave_info({
      reg_no:req.body.reg_no,
      start_date:req.body.start_date,
      end_date:req.body.end_date,
      reason:req.body.reason,
      reason_Desp:req.body.reason_Desp
    });
      data.save().then((doc)=>{
        console.log(doc);
      }).catch((err)=>console.log(err));
  });
  
  app.use(express.json());
app.post('/changepass',async(req,res)=>{
  // console.log(req.body)
  const {cpass,npass,reg}=req.body;
  await details.find({teacherid:reg,pin:cpass})
  .then(async (result)=>{
    // console.log(result)
    if(typeof result[0]!=="undefined"){
      await details.findOneAndUpdate({teacherid:reg},{pin:npass},{new:true});
      res.json("changed");
    }
    else{
      res.json("notexist");
    }
  })
})