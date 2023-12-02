import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoot from "./presenter/ReactRoot.jsx";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import firebaseConfig from './firebaseConfig.js';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getDatabase(app)
const provider = new GoogleAuthProvider();

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactRoot/>
)
