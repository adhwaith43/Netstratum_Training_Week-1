import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                <a class="nav-link active" aria-current="page" href="#">Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                <a class="nav-link active" aria-current="page" href="#">About</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/calculator">
                <a class="nav-link active" aria-current="page" href="#">Calculator</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/temperature">
                <a class="nav-link active" aria-current="page" href="#">Temperature</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/bmi">
                <a class="nav-link active" aria-current="page" href="#">Bmi</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar