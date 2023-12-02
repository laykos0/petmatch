import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoot from "./presenter/ReactRoot.jsx";

import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebaseConfig.js';


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactRoot/>
)
