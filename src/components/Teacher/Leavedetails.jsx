import React from 'react'
// import { useEffect } from 'react'

const Leavedetails = ({leave}) => {
  return (
    <>
{
        typeof leave[0]!=="undefined"? leave[0].map(e=>{
          return(<>
          {e.map(x=>{
            return(<>
                <tr>
      <td>{x.reg_no}</td>
      <td>{x.start_date}</td>
      <td>{x.end_date}</td>
      <td>{x.reason}</td>
      <td>{x.reason_Desp}</td>
    </tr>
          </>)
        })}
          </>)
     }):console.log("")
     }
    </>
  );
}

export default Leavedetails
// return(<>
//   {
//     e[0].length!==1 ?
//     e[0].map(x=>{
//       return(
//         <>
    //     <tr>
    //   <td>{x.reg_no}</td>
    //   <td>{x.start_date}</td>
    //   <td>{x.end_date}</td>
    //   <td>{x.reason}</td>
    //   <td>{x.reason_Desp}</td>
    // </tr>
//         </>
//       )
//     })
//     :
//       <tr>
//       <td>{e[0].reg_no}</td>
//       <td>{e[0].start_date}</td>
//       <td>{e[0].end_date}</td>
//       <td>{e[0].reason}</td>
//       <td>{e[0].reason_Desp}</td>
//     </tr>
//   }
// </>)