import {React, useState } from "react";
import './Navbar.css'; 

function Navbar(){
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    return (
            <nav className="navbar">
              <div className="nav-item dropdown" onClick={()=>{setDropDownOpen(!isDropDownOpen)}}>
                <span><button>Menu</button></span>
                {isDropDownOpen && (
                  <div className="dropdown-menu">
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


