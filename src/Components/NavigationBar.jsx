import {React, useState } from "react";
import './Navbar.css'; 

function Navigation(){
    const dropDownOptions = [
        {
            path: "/",
            title: "Home Page"
        },
        {
            path: "/browsing",
            title: "Browsing Page"
        },
        {
            path: "/result-details",
            title: "Result Details Page"
        },
        {
            path: "/results-summary",
            title: "Results Summary Page"
        },
    ];
    const [isDropDownOpen, setDropDownOpen] = useState(false);

    return (
            <nav className="navbar">
              <div className="nav-item dropdown" onClick={()=>{setDropDownOpen(!isDropDownOpen)}}>
                <span>Menu</span>
                {isDropDownOpen && (
                  <div className="dropdown-menu">
                    <a href="/result-details">Result Details Page</a>
                    <a href="/results-summary">Results Summary Page</a>
                    <a href="/">Welcome Page</a>
                  </div>
                )}
              </div>
            </nav>
          );
}

export default Navigation;


