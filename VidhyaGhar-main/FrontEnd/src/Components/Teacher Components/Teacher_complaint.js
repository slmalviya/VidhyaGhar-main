import React, { useState } from "react";
import axios from "axios";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "../Complaint.css";

export default function Teacher_complaint() {
  // const [userType, setUserType] = useState('Teacher');
  const userType = "Teacher";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the complaint description and user ID
    if (!description) {
      setError("Please enter a complaint description.");
      return;
    }

    if (!title) {
      setError("Please enter title");
      return;
    }

    try {
      // Send a POST request to submit the complaint
      await axios.post("http://localhost:5000/submit-complaint", {
        userType,
        title,
        description,
      });
      setError(null);
      alert("Complaint submitted successfully.");
      setDescription("");
      setTitle("");
    } catch (error) {
      console.error("Error submitting complaint:", error);
      setError("Error submitting complaint. Please try again later.");
    }
  };

  return (
    <div>
      <Nav2 />
      {/* <div className='Complaint-box'>
      <h1  style={{ marginTop: '2%'}}>Complaint</h1>
      <center><textarea name="complaint" id="complaint" cols="30" rows="10" placeholder='Write complaint here'></textarea></center>  
      </div> */}

      <div className="container" >
        <h2>Submit a Complaint</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* <div>
          <label>Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div> */}
          <br />
          <div >
            {/* <label>title</label> */}
            <input
              id="title-field"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title Here"
              required
            />
          </div>
          <br />
          <div>
            {/* <label>Description:</label> */}
            <textarea
              rows="10"
              cols="50"
              placeholder="Enter your complaint here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required></textarea>
              
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
