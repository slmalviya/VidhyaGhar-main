import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./images/logo.png";
import phonelogo from './images/phn.png';



export default function Nav() {
  return (
    <div>

    <div className='home'>
        <div className='nav'>
          <div className='col1'>
            
            <img src={logo} width="90px" height="90px"  alt='logo'/>
          <h1>Vidhyaghar</h1>
            
          </div>
        
          <div className='col2'>
            <br /><br /><br />
            <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Login
        </Dropdown.Toggle>
  
        <Dropdown.Menu id='menu'>
          <Dropdown.Item id='item'> <Link to="/admin" id='link'>Admin</Link></Dropdown.Item>
          <Dropdown.Item id='item'><Link to="/teacher" id='link'> Teacher</Link></Dropdown.Item>
          <Dropdown.Item id='item'><Link to="/student" id='link'> Student</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
            <hr /><br />
            <a href='tel:+91-76343658367'><img src={phonelogo} width="25px" height="25px" alt='phone logo'/>  +91-76343658367</a>
  
  
          </div>
  
        </div>
        <div className='content'>
          <ul>
            <li>
              <Link to="/" id='link'> Home</Link>
            </li>
            <li><Link to="/courses" id='link'>Our Courses</Link></li>
            <li>  <Link to="/services" id='link'>Services</Link></li>
            <li>  <Link to="/contact" id='link'>Contact</Link></li>
          </ul>
        </div>
      </div>
      </div>
  )
}
