import React from "react";
import "./App.css";
import logo from "./logo.png";
import phonelogo from "./phn.png";
import maillogo from "./mail.png";
import iglogo from "./ig.png";
import twitterlogo from "./twitter.png";
import telegramlogo from "./telegram.png";
import school1 from "./school1.jpg";
import school2 from "./school2.jpg";
import school3 from "./school3.jpg";
import school4 from "./school4.jpg";
import school5 from "./school5.jpg";
import school6 from "./school6.jpg";

import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <>
      {" "}
      <div className="home">
        <div className="nav">
          <div className="col1">
            <img src={logo} width="90px" height="90px" />
            <h1>VidhyaGhar</h1>
          </div>
          <div className="col2">
            <br />
            <br />
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Login
              </Dropdown.Toggle>

              <Dropdown.Menu id="menu">
                <Dropdown.Item id="item">
                  {" "}
                  <Link to="/admin" id="link">
                    Admin
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="item">
                  <Link to="/teacher" id="link">
                    {" "}
                    Teacher
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="item">
                  <Link to="/student" id="link">
                    {" "}
                    Student
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <hr />
            <br />
            <a href="tel:+91-76343658367">
              <img src={phonelogo} width="25px" height="25px" /> +91-76343658367
            </a>
          </div>
        </div>
        <div className="content">
          <ul>
            <li>
              <Link to="/" id="link">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" id="link">
                Our Courses
              </Link>
            </li>

            <li>
              {" "}
              <Link to="/services" id="link">
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/contact" id="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <center>
          <div className="head">
            <br />
            <br />
            <h1>Vidhya Ghar</h1>
            <p>
              "Learn as much as you can while you are young, <br />
              since life becomes too busy later."
            </p>
          </div>
        </center>
        <br />
        <div className="about">
          <div className="col">
            <div className="cot">
              <h2>About US</h2>
              <br /> <br />
              <img
                src={school1}
                alt="VIDHYAGHAR"
                width="500px"
                height="400px"
                id="school1"
              />
              <br /> <br />
              <p>
                A journey of a thousand miles begins with a single step. You
                cannot dream of becoming something <br /> you do not know about.
                You have to learn to dream big. Education exposes you to what
                the world has to offer, <br /> to the possibilities open to you.
              </p>
              <ul>
                {" "}
                <li>
                  <Link to="/courses" id="link">
                    Learn More
                  </Link>
                </li>
              </ul>
              <br /> <br />
            </div>

            <div className="cot">
              <h2>Gallery</h2>
              <br /> <br />
              <div
                style={{
                  display: "block",
                  width: 300,
                }}
                id="school1">
                <Carousel>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school2}
                      height="400px"
                      alt="Image One"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school3}
                      height="400px"
                      alt="Image Two"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school4}
                      height="400px"
                      id="school1"
                      alt="Image thrid"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school5}
                      height="400px"
                      id="school1"
                      alt="Image four"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school6}
                      height="400px"
                      id="school1"
                      alt="Image six"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <br />
          <div className="logo">
            <img src={logo} width="120px" height="120px" />
          </div>

          <div className="logo">
            <h1>Vidhya Ghar</h1>
            <div className="media">
              <a href="#">
                <img src={iglogo} width="25px" height="25px" />
              </a>

              <a href="#">
                <img src={twitterlogo} width="25px" height="25px" />
              </a>

              <a href="#">
                <img src={telegramlogo} width="25px" height="25px" />
              </a>
            </div>
          </div>
          <div className="logo">
            <h3>Contact Us:</h3>
            <a href="tel:+91-76343658367">
              <img src={phonelogo} width="25px" height="25px" /> +91-76343658367
            </a>
            <br />
            <a href="mailto:vidhyagharschool@gmail.com">
              <img src={maillogo} width="25px" height="25px" /> vidhya@gmail.com
            </a>{" "}
            <br />
          </div>
          <div className="logo">
            <h3>Address:</h3>
            <p>
              Plot-246, Janta Colony <br /> Jaipur, Rajasthan{" "}
            </p>
          </div>
          <div className="logo"></div>
        </div>
        <div className="foot">
          <p>Copyright@allrightsreserved2023</p>
        </div>
      </div>
    </>
  );
}
