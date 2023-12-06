import React, { useEffect, useRef } from "react";
import auth from "../services/auth.js";
import WelcomeView from "../view/welcomeView.jsx";
import { useNavigate } from "react-router-dom"

export default function Welcome() {
  
  const navigate = useNavigate();
  const unsubscribeRef = useRef(null);

  useEffect(() => {
    unsubscribeRef.current = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/browsing");
      } else {
        navigate("/")
      }
    });
  }, [navigate]);


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
