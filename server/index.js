const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

// let detail=require("./authenticate");
const leave_info=require("./leave_info");
let atten=require("./attendance");

let payments=require("./payments");
let receipts=require("./receipts");
let details=require('./details');

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
    await details.find({reg_no:regno})
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

app.use('/',router);
app.get('/getstudentmarks',async (req,res)=>{
  let id=req.query.user;
  // console.log(req.query);
  await mark.find({'courses.faculty':"John Doe"},{
    "courses.$":1,"student_id":1
  })
  .then((result)=>{
    // const{...dat}=result.courses;
    // console.log(result)
    res.send(result);
  })
})

app.use('/',router);
app.get('/getdetails',async(req,res)=>{
  details.find({reg_no:req.query.user})
  .then(result=>{
    res.send(result);
  })
  .catch(err=>{
    console.log(err);
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

  app.use("/",router);
  app.get('/getqueries',(req,res)=>{
    // console.log(req.query)
    leave_info.find({reg_no:req.query.id})
    .then((result)=>{
      res.send(result);
    })
    .catch(err=>{
      console.log(err);
    })
  
  })

app.use("/",router);
app.get('/getpayments',(req,res)=>{
  console.log(req.query)
  payments.find({reg_no:req.query.user})
  .then((result)=>{
    res.send(result);
    console.log(result)
  })
  .catch(err=>{
    console.log(err);
  })

})
app.use("/",router);
app.get('/getreceipts',(req,res)=>{
  receipts.find({reg_no:req.query.user})
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
              name:req.body.con.reciepts[0].payment_for,
            },
            unit_amount:Number.parseInt(req.body.con.reciepts[0].amount_to_be_paid)*100
          },
          quantity:1
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/checkoutsuccess?id='+req.body.con.reciepts[0].receipt_number,
      cancel_url: 'http://localhost:3000/loggedin/home',
    });
    res.send({url:session.url});
    // console.log(r  eq.body.con.reciepts[0].receipt_number)
  });

  app.use('/',router);
  app.post('/updatepayments',(req,res)=>{
    console.log(req.body)
    payments.find({ "reg_no":req.body.regno ,
    "reciepts.receipt_number": req.body.orderId},{"reciepts.$":1,"reg_no":1,"_id":0})
    .then((result)=>{
      // const data=new receipts(result[0]);
      // console.log(result[0]);
      receipts.insertMany(result[0]);
      payments.deleteOne({reg_no:req.body.regno,"reciepts.receipt_number":req.body.orderId})
    .then().catch(err=>{
      console.log(err);
    })
    }).catch(err=>{
      console.log(err);
    })
  })