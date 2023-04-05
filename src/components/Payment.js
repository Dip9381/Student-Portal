import React, { useEffect, useState } from 'react'
import './style/paymentcss.css'
import axios from "../axios";
import RecieptData from "./RecieptData.js"
import Paymentdata from "./Paymentdata"

const Payment = () => {
    // const [user,setuser]=useState("");
    // useEffect(()=>{
    //   setuser((df)=>{
    //     df="";
    //     // console.log(localStorage.getItem("regno"));
    //     df=localStorage.getItem("regno");
    //     return df;
    //   })})
    const [paymentdata,setpaymentdata]=useState([]);
    const [receiptdata,setreceiptdata]=useState([]);
    useState(()=>{
        axios.get('http://localhost:4000/getpayments',
        {params:{user:localStorage.getItem("regno")}}
        )
        .then((result)=>{
            console.log(result.data);
            setpaymentdata(df=>{
                df=[];
                return [...df,result.data];
            })
        }).catch(err=>{
            console.log(err);
        });
        axios.get('http://localhost:4000/getreceipts',{params:{user:localStorage.getItem("regno")}})
        .then((result)=>{
            // console.log(result.data[0]);
            setreceiptdata(df=>{
                df=[];
                return [...df,result.data];
            })
        }).catch(err=>{
            console.log(err);
        });
    })

  return (
    <>
    <div id='payments'>
        <table border={1}>
            <caption style={{fontSize:"40px"}}><b>Payments</b></caption>
            <tbody>
                <tr>
                <th>Payment Number</th>
                <th>Payment Details</th>
                <th>Amount to be paid</th>
                <th>Amount in words</th>
                </tr>
                    <Paymentdata data={paymentdata}/>
            </tbody>
        </table>
    <br />
        <hr />
        <table border={1}>
            <caption style={{fontSize:"40px"}}><b>Reciepts</b></caption>
            <tbody>
                <tr>
                <th>Payment Number</th>
                <th>Payment Details</th>
                <th>Reciept id</th>
                <th>Amount paid</th>
                <th>Amount in words</th>
                </tr>
                    <RecieptData data={receiptdata}/>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Payment