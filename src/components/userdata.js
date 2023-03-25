import React from 'react'

const  userdata = ({attendances,user}) => {

    // console.log(typeof attendances)
  return (
    <>
    {
    attendances[0]?.map(e=>{
    // console.log(e);
    return(
        <>
        <tr>
        <td>{e.Subject}</td>
        <td>{e.course_code}</td>
        <td>{e.faculty_name}</td>
        <td>{e.reg_no.map(x=>{
            if(x.reg===user)
            return x.present;
        })}
        </td>
        <td>
        {e.reg_no.map(x=>{
            if(x.reg===user)
            return x.total;
        })}
        </td>
    </tr> 
        </>
    );
    })
    }
    </>
  );
}

export default userdata;