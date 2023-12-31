import React, { useState } from 'react';
import "../styles/login.css"

function LoginView(props) {
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

  function handleToggleView() {
    props.onToggleView();
  }

  return (
    <div className="login-wrapper">
        <div className="login-form my-20">
          <h2 className='text-2xl font-thin py-5'>Login</h2>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input" />
          </div>
          <button onClick={handleSignInEmailPassword} className="sign-in-btn">
            Sign In
          </button>
          <button onClick={handleSignInGoogle} className="sign-in-btn">
            Sign In Google
          </button>
          <span className='no-acnt' style={{textDecoration: 'underline'}} onClick={handleToggleView}>
            {"Don't have an account? Click here"}
          </span>
      </div>

      <div className="tagline-login">
          Helping you find a <span class="highlighted-word">forever home</span> for the dog that is <span class="highlighted-word">your</span> perfect match !
      </div>

    </div>
  );
}

export default LoginView;
