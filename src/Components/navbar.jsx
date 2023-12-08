import {React, useState } from "react";
import '../styles/navbar.css'; 

function Navbar(){
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    return (
            <nav className="navbar">
              <div className="nav-item dropdown" onClick={()=>{setDropDownOpen(!isDropDownOpen)}}>
                <span>
                  <button className="text-xl font-bold text-purple-300 w-20 rounded hover:rounded-lg ">
                    Menu
                  </button>
                </span>
                {isDropDownOpen && (
                  <div className="dropdown-menu font-sans text-purple-200">
                    <a href="#/">Welcome Page</a>
                    <a href="#/browsing">Browsing Page</a>
                    <a href="#/results-summary">Results Summary Page</a>
                    <a href="#/result-details">Result Details Page</a>
                  </div>
                )}
              </div>
            </nav>
          );
}

export default Navbar;


