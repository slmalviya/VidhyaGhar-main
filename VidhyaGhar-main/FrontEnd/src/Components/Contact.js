import React from 'react'
import './Home.css';
import './Contact.css';
import Nav from './Nav';
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
<Nav/>

  <div className='home'>
    
      <center>
        <div className='head'>
          <br /><br />
          <h1>Contact</h1>
          <p>"Change is the end result of all true learning."</p>
        </div>
      </center>
     
    </div>
      <div className='about'>
        <div className='col1'>
          <h3>Contact
            <h1>Get In Touch</h1>
            <ul>
              <li>
                <h5>Location:
                  <p>Plot-246, Janta Colony  Jaipur, Rajasthan</p></h5>
              </li>
              <br />
              <li>
                <h5>Email:
                  <p>vidhya@gmail.com</p></h5>
              </li>
              <br />
              <li>
                <h5>Call:
                  <p>+91-76343658367</p></h5>
              </li>
              <br />
            </ul>

          </h3>
        </div>
        <div className='form'>
        <br />
        <br />

          <form action=''>

            <input type='text' placeholder='Your name' />
            <br /> <br />
            <input type='email' id='email' placeholder='Email' />
            <br />
            <br />
            <input type='text' placeholder=' Subject' />
            <br /> <br />
            <input type='text' placeholder='Message' />
            <br />
            <br />
            <button>Send Message</button>
          </form>
        </div>
        <div></div>
      </div>

      <Footer/>
    </div>
  )
}
