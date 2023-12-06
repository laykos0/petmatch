import React, { useState } from 'react';

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
    props.onSignUpEmail(email, password);
  }

  function handleToggleView() {
    props.onToggleView();
  }

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input" />
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
          className="form-input"
        />
      </div>
      <button onClick={handleSignUp} className="sign-up-btn">
        Sign Up
      </button> 
      <button onClick={handleSignInGoogle} className="sign-in-btn">
        Sign Up Google
      </button>
      <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }} onClick={handleToggleView}>
        {'Already have an account? Log in'}
        </span>
    </div>
  );
}

export default SignupView;
