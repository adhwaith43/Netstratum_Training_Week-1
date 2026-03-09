import React from 'react'

function Skills() {
  let s=['Front End Development','Back End Development','Database Management']
  return (
    <div class="container-fluid bg-light mt-5 p-5">
      <h4 class="text-center">Skills</h4>
      <ul class="mt-3">

        {/* syntax of map fn - array.map(arrow function) */}
        {s.map((i)=><li>{i}</li>)}

      </ul>
    </div>
  )
}

export default Skills