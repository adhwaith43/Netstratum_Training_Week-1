import React from 'react'

function Projects() {
  let p=['Ecommerce Website','Task Management App','Weather Forecast App']
  return (
    (
    <div class="container-fluid bg-light mt-5 p-5">
      <h4 class="text-center">Projects</h4>
      <ol class="mt-3">
        {p.map((i)=><li>{i}</li>)}
      </ol>
    </div>
  )
  )
}

export default Projects