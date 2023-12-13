import React, { useState } from 'react';
import "../styles/login.css";

function ProfileView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSignInEmailPassword() {
    props.onSignInEmail(email, password);
  }

  function handleSignInGoogle() {
    props.onSignInGoogle();
  }

  return (
    <div className="login-form my-20">
      <h2 className='text-2xl font-thin py-5'>Update Your Location</h2>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Zip Code
        </label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" />
      </div>

      <button onClick={handleSignInEmailPassword} className="sign-in-btn">
        Update Zip Code
      </button>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          State Code (e.g 'MA')
        </label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input" />
      </div>

      <button onClick={handleSignInGoogle} className="sign-in-btn">
        Update State Code
      </button>
    </div>
  );
}



export default ProfileView;