import React from 'react'
import Markshow from './Markshow.js';
const Marksdata = ({marks,count}) => {
  return (
    <>
    {

       typeof marks[0]!=="undefined"?(

        marks[0].courses.map(e=>{
            // {console.log(e)}
            // let student_id=marks[0].student_id;
            let class_number=marks[0].class_number;
            count++;
            return(
                <>
                <tr>
        <td>{count}</td>
        <td>{class_number}</td>
        <td>{e.course_code}</td>
        <td>{e.course_title}</td>
        <td>{e.course_type}</td>
        <td>{e.course_system}</td>
        <td>{e.faculty}</td>
        <td>{e.slot}</td>
      </tr>
      <tr>
        <td colSpan={8}>
            <table className="main1" border="1">
                <tbody>
                  <tr>
                    <th>Sl.No.</th>
                    <th>Mark Title</th>
                    <th>Max. Mark</th>
                    <th>Weightage %</th>
                    <th>Status</th>
                    <th>Scored Mark</th>
                    <th>Weightage Mark</th>
                    <th>Weightage Mark</th>
                </tr>
                <Markshow marks={e.details}/>
                </tbody>
            </table>
        </td>
      </tr> 
                </>
            );
        }) 
        
        
        ):(console.log("delay handeled"))
        
    }
    </>
  )
}

export default Marksdata
 