import React from "react";
import "../Components/Login.css";
// import { Link } from "react-router-dom";

import image from "./teacher student logo.png";

export default function Login(props) {
  return (
    <div className="body">
    <h1  style={{ marginTop: '2%'}}>{props.title}</h1>
      <div className="login-box">
        <div>
          <img src={image} alt="" />
        </div>

        <form action={props.loginLink}>
          <input
            type="email"
            name="student-email"
            id="input-field"
            placeholder="Your email"
            required
          />
          <br />
          <input
            type="password"
            name="student-password"
            id="input-field"
            placeholder="password"
            required
          />
          <br />
          <br />
          <input type="checkbox" name="show-password" id="" />
          <label htmlFor="show-password">show password</label>
                <br />

          <input type="submit" className="button" />
          {/* <button onClick='/'>Log in</button>
           */}
           <br />
           {/* <Link className='button' to={props.loginLink} >Login</Link> */}
            <br /> <br />
         
        <center><a href="/">forgot password</a></center>
        
        </form>

      </div>
    </div>
  );
}
