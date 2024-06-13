import React from 'react'
import Nav from '../Nav'
import Dashboard_comp from '../Dashboard_comp'
import Footer from '../Footer'

export default function Teacher_dashboard() {
  return (
    <div>
      <Nav/>
      <h1 style={{ marginTop: '2%'}}>Teacher Dashboard</h1>
      <div className="mainbox">
      {/* <Dashboard_comp heading='Edit Result' path='teacher/TeacherDashboard/result'/> */}
      <Dashboard_comp heading='Mark Attendence' path='/teacher/TeacherDashboard/attendence'/>
      <Dashboard_comp heading='Complaint' path='/teacher/TeacherDashboard/complaint'/>
      <Dashboard_comp heading='Add Marks' path='/teacher/TeacherDashboard/marks'/>

      </div>
        <Footer/>
    </div>
  )
}
