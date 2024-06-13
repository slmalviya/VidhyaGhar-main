import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Footer";
import "../attendence.css";

import Nav2 from "../Nav2";

export default function Manage_result() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [marks, setMarks] = useState("");

  useEffect(() => {
    // Fetch the list of students when the component mounts
    axios.get("http://localhost:5000/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleSubmitResult = async () => {
    try {
      // Make a POST request to save the result
      const response = await axios.post("http://localhost:5000/add-result", {
        studentId: selectedStudentId,
        subject: selectedSubject,
        marks: parseInt(marks),
      });

      if (response.status === 200) {
        alert("Result saved successfully!");
        // Clear the form after successful submission
        setSelectedStudentId("");
        setSelectedSubject("");
        setMarks("");
        setResults([...results, response.data]);
      }
    } catch (error) {
      console.error("Error saving result:", error);
      setError("Error saving result.");
    }
  };


  useEffect(() => {
    // Fetch results for the logged-in student
    axios.get('http://localhost:5000/all-result')
      .then((response) => {
        setResults(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching results:', error);
        setLoading(false);
        setError('Error fetching results. Please try again later.');
      });
  }, []);

  return (
    <div>
      <Nav2 />

      <div className="container">


      <div>
          <h2>Results</h2>
          <table className="atten-box">
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {results.map((record) => (
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
        <h2>Add Marks</h2>
        <form>
          <div>
            <label>Student ID:</label>
            <select
              className="atten-input"
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}>
              <option value="">Select Student</option>
              {students.map((student) => (
                <option key={student.studentId} value={student.studentId}>
                  {student.name} ({student.studentId})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Subject:</label>
            <select
              className="atten-input"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="Operating System">Operating System</option>
              <option value="Information Theory and Coding">
                Information Theory and Coding
              </option>
              <option value="Human Computer Interaction">
                Human Computer Interaction
              </option>
              <option value="Analysis of Algorithm">
                Analysis of Algorithm
              </option>
              <option value="Compiler Design">Compiler Design</option>
              <option value="Computer Graphics and Multimedia">
                Computer Graphics and Multimedia
              </option>
              {/* Add more subject options as needed */}
            </select>
          </div>
          <div>
            <label>Marks:</label>
            <input
              className="atten-input"
              placeholder="Enter Marks"
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
          <button className="btn" type="button" onClick={handleSubmitResult}>
            Save Result
          </button>
        </form>
        {error && <p className="error">{error}</p>}

        <br />

        
      </div>
      <Footer />
    </div>
  );
}
