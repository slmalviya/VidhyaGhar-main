import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav'
import Footer from '../Footer'
import '../attendence.css'

export default function Student_result() {

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [resultData, setResultData] = useState([]);


  const ShowResults = () => {
    if (selectedStudent) {
      axios
        .get(`http://localhost:5000/get-results/${selectedStudent}`)
        .then((response) => {
          setResultData(response.data);
        })
        .catch((error) => {
          console.error(error);
          alert('Error fetching result records');
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
      <h1>View Result</h1>
    
      <div className='container'>

      <select className='atten-input' onChange={(e) => setSelectedStudent(e.target.value)}>
          <option value="" >Select a student</option>
          {students.map((student) => (
            <option key={student.studentId} value={student.studentId}>
              {student.studentId}
            </option>
          ))}
        </select>
        <br />
        <button className='btn' onClick={ShowResults}>View Result</button>
        <table className='atten-box'>
        
          <tbody>
            {resultData.map((record) => (
              <tr key={record._id}>
                <td>{record.studentId}</td>
                <td>{record.subject}</td>
                <td>{record.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br />
      <Footer/>
    </div>
  )
}
