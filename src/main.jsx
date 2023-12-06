import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRoot from "./presenter/ReactRoot.jsx";
import NavBar from './Components/NavigationBar';

ReactDOM.createRoot(document.getElementById('root')).render(

    <div>
        <NavBar/>
        <ReactRoot/>
    </div>
)

// import auth from "./services/auth.js"
// window.auth = auth
// import userModel from "./model/user.js"
// window.model = userModel
