import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav2 from "./Nav2";
import Footer from "./Footer";
import "../Components/Login.css";
import image from "../Components/teacher student logo.png";

export default function Student_login() {
  const [loginData, setLoginData] = useState({
    studentId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the login API route
      const response = await axios.post(
        "http://localhost:5000/student-login",
        loginData
      );
      if (response.status === 200) {
      
        navigate("/student/StudentDashboard");
        localStorage.setItem("user",JSON.stringify(loginData))
        // const auth = localStorage.setItem("user",);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Login failed. Enter Valid credentials.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div>
      <Nav2 />
      <div className="body">
        <h1 style={{ marginTop: "2%" }}>Student LogIn</h1>
        <div className="login-box">
          <div>
            <img src={image} alt="login-logo" />
          </div>
          <div>
            <form onSubmit={handleLogin}>
              <div>
                <label>Student ID:</label>
                <input
                  type="text"
                  name="studentId"
                  id="input-field"
                  value={loginData.studentId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  name="password"
                  id="input-field"
                  value={loginData.password}
                  onChange={handleInputChange}
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

              <button type="submit" className="button">
                Login
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
