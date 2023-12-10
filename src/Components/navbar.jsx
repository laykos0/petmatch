import {React, useState } from "react";
import '../styles/navbar.css'; 
import auth from "../services/auth"


function Navbar(){
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    return (
            <nav className="navbar">
              <div className="nav-item dropdown" onClick={()=>{setDropDownOpen(!isDropDownOpen)}}>
                <span>
                  <button className="text-xl font-bold text-purple-300 w-20 rounded hover:rounded-lg">
                      Menu
                  </button>
                </span>
                {isDropDownOpen && (
                  <div className="dropdown-menu font-sans text-purple-200">
                    <a href="#/">Home</a>
                    <a href="#/browsing">Browse</a>
                    <a href="#/results-summary">Results</a>
                    <a href="#/result-details">Details</a>
                    <a onClick={() => auth.signOut()}>Log Out</a>
                  </div>
                )}
              </div>
            </nav>
          );
}

export default Navbar;


