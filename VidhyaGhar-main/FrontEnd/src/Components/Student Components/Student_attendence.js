import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav'
import Footer from '../Footer'

export default function Student_attendence() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);




  const viewAttendance = () => {
    if (selectedStudent) {
      axios
        .get(`http://localhost:5000/get-attendance/${selectedStudent}`)
        .then((response) => {
          setAttendanceData(response.data);
        })
        .catch((error) => {
          console.error(error);
          alert('Error fetching attendance records');
        });
    }
  };



  useEffect(() => {
    // Fetch the list of students when the component mounts
    axios.get('http://localhost:5000/students').then((response) => {
      setStudents(response.data);
    });
  }, []);


  return (
    <div>
      <Nav/>
     
      <div className='container'>
        <h2>View Attendance</h2>
        <select className="atten-input" onChange={(e) => setSelectedStudent(e.target.value)}>
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.studentId} value={student.studentId}>
              {student.name}
            </option>
          ))}
        </select>
        <br />
        <button className='btn' onClick={viewAttendance}>View Attendance</button>
        <table className='atten-box'>
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record) => (
              <tr key={record._id}>
                <td>{record.studentId}</td>
                <td>{new Date(record.date).toLocaleDateString()}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      <Footer/>
    </div>
  )
}
