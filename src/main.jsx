import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoot from "./presenter/ReactRoot.jsx";




ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactRoot/>
);
import auth from "./services/auth.js"
window.auth = auth
import userModel from "./model/user.js"
window.model = userModel