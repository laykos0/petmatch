/* Functional JSX component. Name must start with capital letter */
import '../SignupForm.css';
import React, { useState } from 'react';

function SignupView(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // function handleNameChange(event) {
    //   setName(event.target.value);
    // }
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }
  
    function handleSignInEmailPassword() {
      props.onSignInEmail(email, password)
    }

    function handleSignInGoogle() {
      props.onSignInGoogle()
    }

    function handleSignUp() {
      props.onSignUpEmail(email, password)
    }
  
    return (
      <div className="signup-form">
        <h2>Sign Up</h2>
        {/* <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="form-input"
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        <button onClick={handleSignInEmailPassword} className="sign-in-btn">Sign In</button>
        <button onClick={handleSignInGoogle} className="sign-in-btn">Sign In Google</button>
        <button onClick={handleSignUp} className="sign-up-btn">Sign Up</button>
      </div>
    );

}

export default SignupView;