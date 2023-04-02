import React from 'react'
import { useEffect } from 'react'

const Leavedetails = ({leave}) => {
  // const [leave,setleave]=useState([]);

  // useEffect(()=>{
  //   axios.get("http://localhost:4000/getqueries",{params:{id}})
  //   .then(result=>{
  //       // console.log(result);
  //       setleave(df=>{
  //           df=[];
  //           return [...df,result.data];
  //       })
  //   })
  // })
  return (
    <>
    {
        typeof leave[0]!=="undefined"? leave[0].map(e=>{
          // console.log(e)
         return(<>
            <tr>
              <td>{e.Name}</td>
              <td>{e.reg_no}</td>
              <td>{e.start_date}</td>
              <td>{e.end_date}</td>
              <td>{e.reason}</td>
              <td>{e.reason_Desp}</td>
            </tr>
         </>)
     }):console.log("")
     }
    </>
  )
}

export default Leavedetails