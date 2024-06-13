import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "./SignUp.css";

export default function Student_SignUp() {
  const [teacherData, setTeacherData] = useState({
    teacherId: '',
    name: '',
    fatherName: '',
    department: '',
    teachingExperience: '',
    mobileNumber: '',
    city: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the teacher API route
      await axios.post('http://localhost:5000/teachers', teacherData);
      alert('Teacher registration successful!');
      navigate('/admin/AdminDashboard')
    } catch (error) {
      console.error('Error registering teacher:', error);
      alert('Teacher registration failed.');
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
        <h2>Teacher Registration</h2>
        <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Teacher ID:</label> */}
          <input
            type="text"
            name="teacherId"
            value={teacherData.teacherId}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter Teacher Id(Eg. TR@XXX)"
            required
          />
        </div>
        <div>
          {/* <label>Name:</label> */}
          <input
            type="text"
            name="name"
            value={teacherData.name}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter  Name"
            required
          />
        </div>
        <div>
          {/* <label>Father's Name:</label> */}
          <input
            type="text"
            name="fatherName"
            value={teacherData.fatherName}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter Father's Name"
            required
          />
        </div>
        <div>
          {/* <label>Department:</label> */}
          <input
            type="text"
            name="department"
            value={teacherData.department}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter Department"
            required
          />
        </div>
        <div>
          {/* <label>Teaching Experience (years):</label> */}
          <input
            type="number"
            name="teachingExperience"
            value={teacherData.teachingExperience}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter Teaching Experience"
            required
          />
        </div>
        <div>
          {/* <label>Mobile Number:</label> */}
          <input
            type="text"
            name="mobileNumber"
            value={teacherData.mobileNumber}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter Mobile Number"
            required
          />
        </div>
        <div>
          {/* <label>City:</label> */}
          <input
            type="text"
            name="city"
            value={teacherData.city}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter City"
            required
          />
        </div>
          <div>
            {/* <label>Password:</label> */}
            <input
             className='input-field' 
             type={showPassword ? "text" : "password"} // Toggle password visibility
              name="password"
              value={teacherData.password}
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
