import React, { useState } from 'react'
import './style/paymentcss.css'
import axios from "../axios";
import RecieptData from "./RecieptData.js"
import Paymentdata from "./Paymentdata"

const Payment = () => {
    const [paymentdata,setpaymentdata]=useState([]);
    const [receiptdata,setreceiptdata]=useState([]);
    useState(()=>{
        axios.get('/getpayments')
        .then((result)=>{
            // console.log(result.data[0].reciepts[0].receipt_number);
            setpaymentdata(df=>{
                df=[];
                return [...df,result.data[0]];
            })
        }).catch(err=>{
            console.log(err);
        });
        axios.get('/getreceipts')
        .then((result)=>{
            // console.log(result.data[0].reciepts[0].receipt_number);
            setreceiptdata(df=>{
                df=[];
                return [...df,result.data[0]];
            })
        }).catch(err=>{
            console.log(err);
        });
    },[])

  return (
    <>
    <div id='payments'>
        <table border={1}>
            <tbody>
                <tr>
                <th>Reciept Number</th>
                <th>Payment Details</th>
                <th>Reciept id</th>
                <th>Amount to be paid</th>
                <th>Amount in words</th>
                </tr>
                    <Paymentdata data={paymentdata}/>
            </tbody>
        </table>
    <br />
        <hr />
        <table border={1}>
            <tbody>
                <tr>
                <th>Reciept Number</th>
                <th>Payment Details</th>
                <th>Reciept id</th>
                <th>Amount to be paid</th>
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