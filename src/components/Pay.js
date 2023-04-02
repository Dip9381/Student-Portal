import axios from '../axios';
import React, { useEffect, useState } from 'react'
const Pay = ({con}) => {
  async function checkout(e){
      // e.preventDefault();
      await axios({
        method:'post',
        url:'http://localhost:4000/checkout-session',
        data:{
          con
          // regno:user
        }
      }).then((result)=>{
        if(result.data.url){
          // console.log(result.data.url);
          window.location=result.data.url;
        }
      }).catch(err=>{
        console.log(err);
      })
    };
  return (  
<button onClick={()=>{checkout()}}>Pay</button>  )
}

export default Pay