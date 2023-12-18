import React from "react";
import auth from "../services/auth.js";
import WelcomeView from "../view/welcomeView.jsx";

export default function Welcome() {
  
  async function onSignInEmail(email, password) {
    await auth.signInEmailPassword(email, password);
  }

  async function onSignInGoogle() {
    try {
      await auth.signInGoogle();
    }
    catch {
      console.log(error)
    }
  }

  async function onSignUpEmail(email, password) {
    await auth.signUpEmailPassword(email, password);
  }

  return <WelcomeView onSignInEmail={onSignInEmail} onSignInGoogle={onSignInGoogle} onSignUpEmail={onSignUpEmail} />;
}
