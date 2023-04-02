import React from "react";
// import Markshow from './Markshow.js';
const Marksdata = ({ marks, count }) => {
  return (
    <>
      {typeof marks !== "undefined"
        ? marks.map((e) => {
            
            return (
              <>
                <tr>
                  <td>1</td>
                  <td>{e[0].courses[0]["course_code"]}</td>
                  <td>{e[0].courses[0]["course_title"]}</td>
                  <td>{e[0].courses[0]["course_type"]}</td>
                  <td>{e[0].courses[0]["course_system"]}</td>
                  <td>{e[0].courses[0]["slot"]}</td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <table style={{marginLeft:"auto",marginRight:"auto",width:"90%"}}>
                      <tbody>
                        <tr>
                          <th>Sl.No.</th>
                          <th>Registration Number</th>
                          <th>Mark Title</th>
                          <th>Max Mark</th>
                          <th>Scored Mark</th>
                          <th>Remarks</th>
                          <th>Status</th>
                        </tr>
                        {e.map((f) => {
                        //   console.log(f)
                          return (
                            <>
                                {f.courses[0].details.map((x) => {
                                    // console.log(x);
                                  return (
                                    <>
                                      <tr>
                                      <td>
                                        {x.serial_no}
                                      </td>
                                      <td>{f.student_id}</td>
                                      <td>
                                        {x.mark_title}
                                      </td>
                                      <td>
                                        {x.max_mark}
                                      </td>
                                      <td>
                                        {x.scored_mark}
                                      </td>
                                      <td>{x.remarks}</td>
                                      <td>{x.status}</td>
                                      </tr>
                                    </>
                                  );
                                })}
                              <tr>
                                <td colSpan={7} style={{backgroundColor:"grey"}}></td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </>
            );
          })
        : console.log("delay handeled")}
    </>
  );
};

export default Marksdata;