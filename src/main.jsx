import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoot from "./presenter/ReactRoot.jsx";




ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactRoot/>
);
import userModel from "./model/user.js"
window.model = userModel
