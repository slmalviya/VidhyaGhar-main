import React from 'react'
// import './Admin_dashboard.css'
import Footer from '../Footer'
// import { Link } from 'react-router-dom'
import Dashboard_comp from '../Dashboard_comp'
import Nav2 from '../Nav2'
export default function Admin_dashboard() {

  return (
    <div>
     <Nav2/>
    

    
       <h1 style={{ marginTop: '2%'}}>Admin Dashboard</h1>
    
      <div className="mainbox">
 <Dashboard_comp heading='Total Students' path='/admin/AdminDashboard/totalstudents'/>  
 <Dashboard_comp heading='Sign Up (Admin)' path='/admin/AdminDashboard/AdminSignUp'/>  
 <Dashboard_comp heading='Sign Up (Teacher)'path='/admin/AdminDashboard/TeacherSignUp'/>  
 <Dashboard_comp heading='Sign Up (Student)'path='/admin/AdminDashboard/StudentSignUp'/>  
 <Dashboard_comp heading='Manage Attendence'path='/admin/AdminDashboard/attendence'/>  
 <Dashboard_comp heading='Manage Result' path='/admin/AdminDashboard/result'/>  
 <Dashboard_comp heading='Notice' path='/admin/AdminDashboard/notice'/>  
 {/* <Dashboard_comp/>   */}
 


      </div> 


      

    <Footer/>
    </div>
  )
}
