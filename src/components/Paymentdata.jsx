import React from 'react'
import Pay from './Pay.js'


const Paymentdata = ({data}) => {
    // console.log(typeof data[0]);
    // console.log(data[0].reciepts);
  return (
    <>
    {
        (typeof data[0]!=="undefined")?(
            // console.log(data[0])
            data[0].reciepts?.map(e=>{
                return(
                    <>
                    <tr>
                        <td>{e.receipt_number}</td>
                        <td>{e.payment_for}</td>
                        <td>{e.number}</td>
                        <td>{e.amount_to_be_paid}</td>
                        <td>{e.amount_in_words}</td>
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