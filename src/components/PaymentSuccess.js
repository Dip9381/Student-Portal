import axios from '../axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const PaymentSuccess = () => {
  useEffect(()=>{
    if(window.location.pathname!=='/'){
      if(document.getElementsByClassName('loginpage').length!==0){
        document.getElementsByClassName('loginpage')[0].style.backgroundImage="none";
      }
    }
  })
  const location =useLocation();
  const orderId = new URLSearchParams(location.search).get("id");
  // console.log(useLocation());
  // useEffect(()=>{
    axios({
      method:'post',
      url:'http://localhost:4000/updatepayments',
      data:{
        orderId,regno:localStorage.getItem("regno")
      }
    }).then().catch(err=>{
      console.log(err);
    })
  // },[])

  // console.log(orderId);
  return (
    <div>
      payment PaymentSuccess
    </div>
  )
}

export default PaymentSuccess