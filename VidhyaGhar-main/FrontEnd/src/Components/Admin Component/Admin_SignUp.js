import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "./SignUp.css";

export default function Student_SignUp() {
  const [adminData, setAdminData] = useState({
    adminId: '',
    name: '',
    fatherName: '',
    department: '',
    mobileNumber: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the admin API route
      await axios.post('http://localhost:5000/admins', adminData);
      alert('Admin registration successful!');
      navigate('/admin/AdminDashboard')

    } catch (error) {
      console.error('Error registering admin:', error);
      alert('Admin registration failed.');
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
        <h2>Admin Registration</h2>
        <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Admin ID:</label> */}
          <input
            type="text"
            name="adminId"
            value={adminData.adminId}
            onChange={handleInputChange}
            className='input-field' 
            placeholder="Enter Admin Id (Eg.AD@XXX)"
            required
          />
        </div>
        <div>
          {/* <label>Name:</label> */}
          <input
            type="text"
            name="name"
            value={adminData.name}
            onChange={handleInputChange}
            className='input-field' 
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          {/* <label>Father's Name:</label> */}
          <input
            type="text"
            name="fatherName"
            value={adminData.fatherName}
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
            value={adminData.department}
            onChange={handleInputChange}
            className='input-field'
            placeholder="Enter Department Name"
            required
          />
        </div>
        <div>
          {/* <label>Mobile Number:</label> */}
          <input
            type="text"
            name="mobileNumber"
            value={adminData.mobileNumber}
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
            value={adminData.city}
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
              value={adminData.password}
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
