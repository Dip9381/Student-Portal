import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './style/paymentsuccesscss.css'


const PaymentSuccess = () => {
  const history = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    // Redirect to another page after 10 seconds
    if (countdown === 0) {
      clearInterval(countdownTimer);
      history('/loggedin/home');
    }

    return () => clearInterval(countdownTimer);
  }, [countdown, history]);
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
  function navigate(e){
    e.preventDefault();
    history('/loggedin/home');
  }
  let time=setTimeout(navigate,10000);
  
  return (
    <>
    <div id='paymentbox'>
    <div id='paymentsuccess' style={{border:"1px solid black"}}>
    <div>
      Payment successful
    </div>
    <div>
      Do not refresh!
    </div>
    <div>
      Redirecting to home page!!! Please wait
    </div>
    </div>
    </div>
    </>
  )
}

export default PaymentSuccess