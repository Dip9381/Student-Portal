import React, { useState } from 'react'
import '../style/passchangestyle.css'
import axios from "../../axios";

const Changepass = () => {
    const [cpass,setcpass]=useState("");
const [npass,setnpass]=useState("");
async function setpass(e){
e.preventDefault();
await axios({
    method:'post',
    url:'http://localhost:4001/changepass',
    data:{
        cpass,npass,reg:"1111"
    }
}).then((response)=>{
    if(response.data==="changed"){
        alert("password changed successfully")
    }
    else{
        alert("Sorry!!! Try again. Wrong Password detected");
    }
}).catch((err)=>{
    console.log(err);
})
}
  return (
    <div id='passchange'>
        <form method="post">
            Current Password: <input type="text" name="cpass" id="tcpass" onChange={(e)=>{setcpass(e.target.value)}} /><br />
            New Password: <input type="text" name="npass" id="tnpass" onChange={(e)=>{setnpass(e.target.value)}}/>
            <input type="button" value="change" onClick={setpass} />
        </form>
    </div>
  )
}

export default Changepass