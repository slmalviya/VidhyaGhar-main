import React from "react";
import "./Home.css";
import "./Courses.css";
import Nav from "./Nav";
import Footer from "./Footer";


export default function Courses() {
  return (
    <div>
      <Nav />
      <div className="home">
        <center>
          <div className="head">
            <br />
            <br />
            <h1>Courses</h1>
            <p>
              "Learn as much as you can while you are young, <br />
              since life becomes too busy later."
            </p>
          </div>
        </center>
      </div>
     
    <div className="course-box">
      <div className="course">
          <img src="https://th.bing.com/th/id/OIP.k5q94W0h_0-yVaTjmjYgDQHaHa?pid=ImgDet&rs=1" alt="science" />
         <center> <h3>Science</h3></center>
      </div>
      <div className="course">
          <img src="https://th.bing.com/th/id/OIP.253iC5Nw1RghMjiaqWe_WgHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="science" />
         <center> <h3>Arts</h3></center>
      </div>
      <div className="course">
     
          <img src="https://th.bing.com/th/id/OIP.GPlud-E3cVVDahzyLR0RRgHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="science" />
         <center> <h3>Commerce</h3></center>
      </div>

    
    </div>

      <Footer />
    </div>
  );
}
