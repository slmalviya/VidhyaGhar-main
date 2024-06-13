import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "./SignUp.css";

export default function Student_SignUp() {
  const [studentData, setStudentData] = useState({
    studentId: "",
    name: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    city: "",
    mobileNumber: "",
    password: "", // Add a password field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the student API route
      await axios.post("http://localhost:5000/studentreg", studentData);
      alert("Student registration successful!");
      navigate('/admin/AdminDashboard')
      
    } catch (error) {
      console.error("Error registering student:", error);
      alert("Student registration failed.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div>
      <Nav2 />
      <div className="container">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Student ID:</label> */}
            <input
             className='input-field' 
              type="text"
              name="studentId"
              value={studentData.studentId}
              onChange={handleInputChange}
              placeholder="Enter Student Id(Eg. ST@XXX)"
              required
            />
          </div>
          <div>
            {/* <label>Name:</label> */}
            <input
             className='input-field' 
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleInputChange}
              placeholder="Enter  name"
              required
            />
          </div>
          <div>
            {/* <label>Father's Name:</label> */}
            <input
             className='input-field' 
              type="text"
              name="fatherName"
              value={studentData.fatherName}
              onChange={handleInputChange}
              placeholder="Enter  Father's Name"
              required
            />
          </div>
          <div>
            {/* <label>Mother's Name:</label> */}
            <input
             className='input-field' 
              type="text"
              name="motherName"
              value={studentData.motherName}
              onChange={handleInputChange}
              placeholder="Enter  mother's Name"
              required
            />
          </div>
          <div>
            {/* <label>Date of Birth:</label> */}
            <input
             className='input-field' 
              type="date"
              name="dateOfBirth"
              value={studentData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            {/* <label>City:</label> */}
            <input
             className='input-field' 
              type="text"
              name="city"
              value={studentData.city}
              onChange={handleInputChange}
              placeholder="Enter City"
              required
            />
          </div>
          <div>
            {/* <label>Mobile Number:</label> */}
            <input
             className='input-field' 
              type="text"
              name="mobileNumber"
              value={studentData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter Mobile Number"
              required
            />
          </div>
          <div>
            {/* <label>Password:</label> */}
            <input
             className='input-field' 
             type={showPassword ? "text" : "password"} // Toggle password visibility
              name="password"
              value={studentData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
             <div>
                  <input
                    type="checkbox"
                    onChange={handleTogglePassword}
                    checked={showPassword}
                  />
                  <label> Show Password</label>
              </div>

      
          </div>
          <button className='btn' type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
