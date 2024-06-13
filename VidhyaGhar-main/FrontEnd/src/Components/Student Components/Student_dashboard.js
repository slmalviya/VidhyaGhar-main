import React from 'react'
import Nav from '../Nav'
import Dashboard_comp from '../Dashboard_comp'
import Footer from '../Footer'

export default function Student_dashboard() {
  return (
    <div>
      <Nav/>
      <h1 style={{ marginTop: '2%'}}>Student Dashboard</h1>
      <div className="mainbox">
      <Dashboard_comp heading='Result' path='/student/StudentDashboard/result'/>
      <Dashboard_comp heading='Attendence' path='/student/StudentDashboard/attendence'/>
      <Dashboard_comp heading='Complaint' path='/student/StudentDashboard/complaint'/>
     

      </div>
        <Footer/>
    </div>
  )
}
