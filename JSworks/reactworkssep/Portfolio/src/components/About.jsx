import React from 'react'

function About() {
  let user={
    name:"Milan",
    age:30,
    location:"New York",
    email:"milan@example.com",
    gender:'Male',
    phone:'123-456-7890'
  }   //javascript object

  //map()
  //arrow function

  return (
    <div>
      <div class="container-fluid bg-light mt-5 p-5">
        <h4 class="text-center mt-5">Full Stack Developer</h4>
        <div class="row mt-5">
              <div class="col-6 ">
                      <div> Name : {user.name}</div>
                      <div> Age : {user.age}</div>
                      <div> Location : {user.location}</div>
              </div>
              <div class="col-6 ps-md-4">
                <div> Email : {user.email}</div>
                <div>Gender : {user.gender}</div>
                <div>Phone : {user["phone"]}</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About