import React, { useState } from 'react';
import LoginView from './loginView';
import SignupView from './signupView';

function WelcomeView(props) {
  const [showLogin, setShowLogin] = useState(true);

  function handleToggleView() {
    setShowLogin((prev) => !prev);
  }

  return (
    <div className='welcome'>
      {showLogin ? (
        <LoginView onSignInEmail={props.onSignInEmail} onSignInGoogle={props.onSignInGoogle} onToggleView={handleToggleView} />
      ) : (
        <SignupView onSignInEmail={props.onSignInEmail} onSignInGoogle={props.onSignInGoogle} onSignUpEmail={props.onSignUpEmail} onToggleView={handleToggleView} />
      )}
    </div>
  );
}

export default WelcomeView;
