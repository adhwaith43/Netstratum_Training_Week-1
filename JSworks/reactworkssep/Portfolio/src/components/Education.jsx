import React from 'react'

function Education() {
  let q=[
    {"course":"Btech",'Uni':"MG","Aggregrate":'85%'},
    {"course":"Mtech",'Uni':"MG","Aggregrate":'80%'}
  ]

  //array of objects

  return (
    <div class="container-fluid bg-light mt-5 p-5">
      <h4 class="text-center">Qualifications</h4>
      <table class="table table-bordered mt-5">
        <tr>
          <th>Degree</th>
          <th>Institution</th>
          <th>Year</th>
        </tr>
        {q.map((i)=><tr>
          <td>{i.course}</td>
          <td>{i.Uni}</td>
          <td>{i.Aggregrate}</td>
           </tr>)}
      </table>
    </div>
  )
}

export default Education