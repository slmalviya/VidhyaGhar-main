import React from 'react'
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import phonelogo from './images/phn.png';

export default function NavBoot() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-black bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} width="90px" height="90px"  alt='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        {/* <li className="nav-item dropdown">
          < className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </>
          <ul className="dropdown-menu">
            <li><Link to="/admin" id='link'>Admin</Link></li>
            <li><Link to="/teacher" id='link'> Teacher</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to="/student" id='link'> Student</Link></li>
          </ul>
        </li> */}
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
