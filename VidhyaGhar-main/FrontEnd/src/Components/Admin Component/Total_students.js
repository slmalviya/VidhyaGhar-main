import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav2 from "../Nav2";
import Footer from "../Footer";


export default function Total_students() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        // Fetch the list of students when the component mounts
        axios.get("http://localhost:5000/students").then((response) => {
          setStudents(response.data);
        });
      }, []);
    

  return (
    
    <div>
      <Nav2 />

      <div className="container">


      <div>
          <h2>Students</h2>
          <table className="atten-box">
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Name</th>
                <th>Father's Name</th>
                <th>Mother's Name</th>
                <th>City</th>
                <th>Contact No.</th>
              </tr>
            </thead>
            <tbody>
              {students.map((record) => (
                <tr key={record._id}>
                  <td>{record.studentId}</td>
                  <td>{record.name}</td>
                  <td>{record.fatherName}</td>
                  <td>{record.motherName}</td>
                  <td>{record.city}</td>
                  <td>{record.mobileNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
    </div>
    <br />

    <br />
    <Footer/>
    </div>
  )
}
