import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav2 from "./Nav2";
import Footer from "./Footer";
import "../Components/Login.css";
import image from "../Components/teacher student logo.png";

export default function Teacher_login() {
  const [loginData, setLoginData] = useState({
    teacherId: "",
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
        "http://localhost:5000/teacher-login",
        loginData
      );
      if (response.status === 200) {
        // alert("Login successful!");
        // Redirect to the home page (change the path as needed)
        navigate("/teacher/TeacherDashboard");
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
        <h1 style={{ marginTop: "2%" }}>Teacher LogIn</h1>
        <div className="login-box">
          <div>
            <img src={image} alt="login-logo" />
          </div>
          <div>
            <form onSubmit={handleLogin}>
              <div>
                <label>Teacher ID:</label>
                <input
                  type="text"
                  name="teacherId"
                  id="input-field"
                  value={loginData.teacherId}
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
