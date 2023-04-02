import React from 'react'
import Pay from './Pay.js'


const Paymentdata = ({data}) => {
    // console.log(typeof data[0]);
    console.log(data[0]);
  return (
    <>
    {
        (typeof data[0]!=="undefined")?(
            // console.log(data[0])
            data[0].map(e=>{
                return(
                    <>
                    {/* {console.log(e)} */}
                    <tr>
                        <td>{e.reciepts[0].receipt_number}</td>
                        <td>{e.reciepts[0].payment_for}</td>
                        <td>{e.reciepts[0].amount_to_be_paid}</td>
                        <td>{e.reciepts[0].amount_in_words}</td>
                        <td><Pay con={e}/></td>
                    </tr>
                    </>
                );
            })


        ):(
            console.log("")
        )
    }
    </>
  )
}

export default Paymentdata