import React, { useState } from 'react';
import "../styles/signup.css";

function SignupView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSignInGoogle() {
    props.onSignInGoogle();
  }

  function handleSignUp() {
    props.onSignUpEmail(email, password, confirmPassword);
  }

  function handleToggleView() {
    props.onToggleView();
  }

  return (
    
    <div className="signup-wrapper">
        <div className="signup-form bg-indigo-100 text-purple-600 inline-grid my-20">
        <h2 className='text-2xl font-thin py-5'>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input bg-violet-400" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password: (Passwords must be at least 6 characters long)
          </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input bg-violet-400" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="form-input bg-violet-400"
          />
        </div>
        <button onClick={handleSignUp} className="sign-in-btn bg-indigo-300">
          Sign Up
        </button>
        <button onClick={handleSignInGoogle} className="sign-in-btn bg-indigo-300">
          Sign Up Google
        </button>
        <span onClick={handleToggleView} className='no-acnt' style={{textDecoration: 'underline'}}>
          {'Already have an account? Log in'}
        </span>
      </div>



    </div>
  );
}

export default SignupView;
