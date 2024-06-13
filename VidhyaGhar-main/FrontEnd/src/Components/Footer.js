import React from "react";
import logo from "./images/logo.png";
import phonelogo from "./images/phn.png";
import maillogo from "./images/mail.png";
import iglogo from "./images/ig.png";
import twitterlogo from "./images/twitter.png";
import telegramlogo from "./images/telegram.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <br />
        <div className="logo">
          <img src={logo} width="120px" height="120px" alt="logo"/>
        </div>

        <div className="logo">
          <h1>Vidhya Ghar</h1>
          <div className="media">
            <a href="/">
              <img src={iglogo} width="25px" alt= "instalogo" height="25px" />
            </a>

            <a href="/">
              <img src={twitterlogo} width="25px" alt="twitterlogo" height="25px" />
            </a>

            <a href="/">
              <img src={telegramlogo} width="25px" alt="telegramlogo" height="25px" />
            </a>
          </div>
        </div>
        <div className="logo">
          <h3>Contact Us:</h3>
          <a href="tel:+91-76343658367">
            <img src={phonelogo} width="25px" height="25px" alt="phonelogo"/> +91-76343658367
          </a>
          <br />
          <a href="mailto:vidhyagharschool@gmail.com">
            <img src={maillogo} width="25px" height="25px" alt="maillogo"/> vidhya@gmail.com
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
  );
}
