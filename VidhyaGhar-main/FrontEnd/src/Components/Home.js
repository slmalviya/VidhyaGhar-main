import React from "react";
import "./Home.css";
import logo from "./images/logo.png";

import school2 from "./images/school2.jpg";
import school3 from "./images/school3.jpg";
import school4 from "./images/school4.jpg";
import school5 from "./images/school5.jpg";
import school6 from "./images/school6.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Nav from "./Nav";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      {" "}
      <div className="home">
        <Nav/>
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
                src={logo}
                alt="VIDHYAGHAR"
                width="500px"
                height="400px"
                id="about-logo"
              />
              <br /> <br />
              <p>
                A journey of a thousand miles begins <br /> with a single step. You
                cannot dream of becoming something <br /> you do not know about.
                You have to learn to dream big. <br/> Education exposes you to what
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
                      alt="school"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school3}
                      height="400px"
                      alt="school"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school4}
                      height="400px"
                      id="school1"
                      alt="school"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school5}
                      height="400px"
                      id="school1"
                      alt="school"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={school6}
                      height="400px"
                      id="school1"
                      alt="school"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

              <Footer/>
      </div>
    </>
  );
}
