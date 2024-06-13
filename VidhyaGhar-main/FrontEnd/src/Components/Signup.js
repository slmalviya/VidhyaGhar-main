import React from 'react'
import image from './teacher student logo.png'
export default function Signup(props) {
  return (
    <div>
          <div className="body">
    <h1>{props.title}</h1>
      <div className="login-box">
        <div>
          <img src={image} alt="" />
        </div>

        <form action="#">
          <input
            type="email"
            name="student-email"
            id="email"
            placeholder="Your email"
          />
          <br />
          <input
            type="password"
            name="student-password"
            id=""
            placeholder="password"
          />
          <input type="checkbox" name="show-password" id="" />
          <label htmlFor="show-password">show password</label>
                <br />
          <button onClick='/'>Log in</button>
          <br />
        
         
        <center><a href="/">forgot password</a></center>
        
        </form>

      </div>
    </div>
    </div>
  )
}
