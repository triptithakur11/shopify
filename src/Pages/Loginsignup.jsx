import React from 'react'
import './loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="logincontainer">
        <h1>
          Sign Up
        </h1>
        <div className="loginfields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder=' Email Address' />
          <input type="Password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignuplogin'>Already have an account? <span>Login here</span></p>
       <div className="loginsignupagree">
        <input type='checkbox' name='' id=''/>
        <p>By Continuing I agree to the terms of use and privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default Loginsignup
