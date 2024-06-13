import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav2 from '../Nav2'
import Footer from '../Footer'
import '../Complaint.css'

export default function Notice() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch complaints from the API when the component mounts
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      // Make a GET request to fetch complaints from the API
      const response = await axios.get('http://localhost:5000/complaints');

      if (response.status === 200) {
        setComplaints(response.data);
      }
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };



  return (
    <div>
      <Nav2/>
      <h2 style={{ marginTop: "2%", textAlign: "center" }}>Complaint List</h2>
      <div className='Complaint-box'>
      <div>
      <table className='complaint-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={index}>
              <td>{complaint.title}</td>
              <td>{complaint.description}</td>
              <td>{complaint.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    
      <Footer/>
    </div>
  )
}
