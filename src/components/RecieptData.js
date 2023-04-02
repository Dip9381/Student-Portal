import React from 'react'


const RecieptData = ({data}) => {
    console.log(data);
    // console.log(data[0].reciepts);
  return (
    <>
    {
        (typeof data[0]!=="undefined")?(
            // console.log(data[0])
            data[0].map(e=>{
                return(
                    <>
                    {console.log(e.reciepts[0])}
                    <tr>
                        <td>{e.reciepts[0].receipt_number}</td>
                        <td>{e.reciepts[0].payment_for}</td>
                        <td>{e.reciepts[0].number}</td>
                        <td>{e.reciepts[0].amount_to_be_paid}</td>
                        <td>{e.reciepts[0].amount_in_words}</td>
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

export default RecieptData