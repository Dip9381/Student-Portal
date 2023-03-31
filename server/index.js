const express = require("express");
const app = express();
app.timeout=10000;
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

let detail=require("./authenticate");
const leave_info=require("./leave_info");
let atten=require("./attendance");

let payments=require("./payments");
let receipts=require("./receipts");

let mark=require("./marks");

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




app.use(express.json());
 app.post('/getauthenticate',async (req,res)=>{
    const {regno,password}=req.body;
    await detail.find({reg_no:regno})
    .then((result)=>{
      // console.log((typeof result[0])==="undefined");
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

app.use(express.json());
app.post('/changepass',async(req,res)=>{
  const {cpass,npass,reg}=req.body;
  await detail.find({reg_no:reg,pin:cpass})
  .then(async (result)=>{
    if(typeof result[0]!=="undefined"){
      await detail.findOneAndUpdate({reg_no:reg},{pin:npass},{new:true});
      res.json("changed");
    }
    else{
      res.json("notexist");
    }
  })
})


app.use('/',router);
app.get('/getmarks',async (req,res)=>{
  let id=req.query.user;
  // console.log(req.query);
  await mark.find({student_id:id})
  .then((result)=>{
    res.send(result);
  })
})

  app.use("/", router);
  app.get('/getattendance',(req,res)=>{
    //     let sub1=req.query.Subject1;
    // let sub2=req.query.Subject2;
    let regno=req.query.user;
    // console.log(req.query);
    atten.find({"reg_no.reg":regno})
    .then(result =>{
      res.send(result);
    })
  })

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
  });

app.use("/",router);
app.get('/getpayments',(req,res)=>{
  payments.find({reg_no:"20bps1142"})
  .then((result)=>{
    res.send(result);
  })
  .catch(err=>{
    console.log(err);
  })

})
app.use("/",router);
app.get('/getreceipts',(req,res)=>{
  receipts.find({reg_no:"20bps1142"})
  .then((result)=>{
    res.send(result);
  })
  .catch(err=>{
    console.log(err);
  })

})



  const Stripe=require("stripe");
// const receipts = require("./receipts");
  const stripe=Stripe(
    "sk_test_51Mr0V4SFAoOMlLO62dIAvgDjqP8fEUgrMYCMGWp3WeMczu3VJnrlPsKgPoxV4JxPoiCqzpp8SqRtnab4yaP5FOJw00WXY62FMg");

  app.use("/", router);
  app.post('/checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data:{
            currency:'inr',
            product_data:{
              name:req.body.con.payment_for,
            },
            unit_amount:Number.parseInt(req.body.con.amount_to_be_paid)*100
          },
          quantity:1
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/checkoutsuccess?id='+req.body.con.receipt_number,
      cancel_url: 'http://localhost:3000/loggedin/home',
    });
    res.send({url:session.url});
  });

  app.use('/',router);
  app.post('/updatepayments',(req,res)=>{
    // console.log(req.body)
    payments.find({ "reg_no":req.body.regno ,
    "reciepts.receipt_number": req.body.orderId},{"reciepts.$":1,"reg_no":1,"_id":0})
    .then((result)=>{
      // const data=new receipts(result[0]);
      // console.log(result[0]);
      receipts.insertMany(result[0]);
    }).catch(err=>{
      console.log(err);
    })
    payments.updateOne({reg_no:req.body.regno},{"$pull":{reciepts:{receipt_number:req.body.orderId}}})
    .then().catch(err=>{
      console.log(err);
    })
  })