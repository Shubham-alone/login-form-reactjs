import React, { useState } from "react";

function Form () {

  const [logIn, setLogIn] = useState(true);

  return(
   <div className="container">
      <div className="form-container">
          <div className="form-toggle">
              <button className={logIn ? 'active' : ''} 
                onClick={() => {
                    setLogIn(true)
                }}>Login</button>

              <button className={!logIn ? 'active' : ''}
                onClick={() => {
                  setLogIn(false)
                }}>SignUp</button>
          </div>
          {logIn ? <>
          <div className="form">
            <h2>Login Form</h2>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter password" />
            <a href="#">Forgot Password</a>
            <button>LogIn</button>
            <p>Not a Member? <a href="#"
              onClick={() => {
                setLogIn(false)
              }}>SignUp Now</a></p>
          </div>
          </> : <>
          <div className="form">
          <h2>SignUp Form</h2>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter password" />
            <input type="password" placeholder="Confirm Passowrd" />
            <button>SignUp</button>
            </div>
          </>}
      </div>
   </div>
  )
};

export default Form;