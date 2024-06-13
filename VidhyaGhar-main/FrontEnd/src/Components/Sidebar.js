import React from 'react'
import Nav from './Nav'
import './Sidebar1.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div>
     <Nav/>

    

     <div className='mainbox'>
      
      <div className='sidebar'>
        <li className='comp-link' >
          <a  href='/'>Signup</a>
          </li>
     
        <li className='comp-link' >
          <a  href='/'>Attendence management</a>
          </li>


        <li className='comp-link' >
          <a  href='/'>Result management</a>
          </li>
        <li className='comp-link' >
          <a  href='/'>complaint </a>
          </li>
        <li className='comp-link' >
        <Link  to='/courses/notice'>notice</Link>
          </li>
        <li className='comp-link' >
          <a  href='/'>other</a>
          </li>

      </div>
      <div className='comp-details'>
      <h1>this is for content</h1>
      </div>
    </div>





    <Footer/>
    </div>
  )
}
