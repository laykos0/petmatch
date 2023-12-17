import React from "react";
import auth from "../services/auth.js";
import WelcomeView from "../view/welcomeView.jsx";

export default function Welcome() {
  
  function onSignInEmail(email, password) {
    auth.signInEmailPassword(email, password);
  }

  function onSignInGoogle() {
    auth.signInGoogle();
  }

  function onSignUpEmail(email, password) {
    auth.signUpEmailPassword(email, password);
  }

  return <WelcomeView onSignInEmail={onSignInEmail} onSignInGoogle={onSignInGoogle} onSignUpEmail={onSignUpEmail} />;
}
