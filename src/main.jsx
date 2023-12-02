import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoot from "./presenter/ReactRoot.jsx";

import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import firebaseConfig from './firebaseConfig.js';


const app = initializeApp(firebaseConfig);
const db= getDatabase(app)

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactRoot/>
)
