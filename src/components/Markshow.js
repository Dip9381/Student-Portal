import React from 'react'

const Markshow = ({marks}) => {
    // console.log(marks);
  return (
    marks?.map(e=>{
        // console.log(e);
                return(
                    <tr>
                    <td>{e.serial_no}</td>
                    <td>{e.mark_title}</td>
                    <td>{e.max_mark}</td>
                    <td>15</td>
                    <td>Present</td>
                    <td>{e.scored_mark}</td>
                    <td>12.5</td>
                    <td>{e.remarks}</td>
                </tr>
                );
    })
  )
}

export default Markshow