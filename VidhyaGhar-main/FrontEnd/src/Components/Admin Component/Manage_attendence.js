import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav2 from '../Nav2'
import Footer from '../Footer'
import '../attendence.css'

export default function Manage_attendence() {

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('present');
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch the list of students when the component mounts
    axios.get('http://localhost:5000/students').then((response) => {
      setStudents(response.data);
    });
  }, []);

  const markAttendance = () => {
    if (selectedStudent && date) {
      axios
        .post('http://localhost:5000/mark-attendance', {
          studentId: selectedStudent,
          date,
          status,
        })
        .then((response) => {
          alert('Attendance marked successfully');
          // Optionally, update the local attendance data with the new record
          setAttendanceData([...attendanceData, response.data]);
        })
        .catch((error) => {
          console.error(error);
          alert('Error marking attendance');
        });
    } else {
      alert('Please select a student and date');
    }
  };

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
      <Nav2/>
      <div className='container'>

      <div>
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


      <div>
        <h2>Mark Attendance</h2>
        <select className="atten-input" onChange={(e) => setSelectedStudent(e.target.value)}>
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.studentId} value={student.studentId}>
              {student.name}
            </option>
          ))}
        </select>
        <input
        className="atten-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select className="atten-input" onChange={(e) => setStatus(e.target.value)}>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
        </select>
            <br />
        <button className='btn' onClick={markAttendance}>Mark Attendance</button>
      </div>
     
      </div>

      <Footer/>
    </div>
  )
}
