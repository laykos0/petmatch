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

  async function onSignUpEmail(email, password, confirmPassword) {
    if(password.length < 6){
      alert("Password too short!");
      return;
    }
    if(password != confirmPassword){
      alert("Two passwords given are not the same!");
      return;
    }
    await auth.signUpEmailPassword(email, password);
  }

  return <WelcomeView onSignInEmail={onSignInEmail} onSignInGoogle={onSignInGoogle} onSignUpEmail={onSignUpEmail} />;
}
