import React from 'react'
import './Home.css';
import Nav from './Nav';
import Footer from './Footer';
import './Courses.css';


export default function Services() {
  return (
    <div>
     <div className='home'>
      <Nav/>
      
      <center>
        <div className='head'>
        <br /><br />
          <h1>Services</h1>
          <p>"Learn as much as you can while you are young, <br />since life becomes too busy later."</p>
        </div>
      </center>
      
      


      <div className="course-box">
      <div className="course">
          <img src="https://irp-cdn.multiscreensite.com/cb959429/dms3rep/multi/School-2BBus.png" alt="transport" />
         <center> <h3>Transport</h3></center>
      </div>
      <div className="course">
          <img src="https://th.bing.com/th/id/OIP.CMcWxhzFeOK8FQT9YRvmlQHaH0?pid=ImgDet&w=203&h=214&c=7&dpr=1.3" alt="science" />
         <center> <h3>Hostel</h3></center>
      </div>
   
    </div>



      <Footer/>
      </div>
    </div>
  )
}
