import Auth from "../services/auth"
import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'; 

function Navbar(){
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const unsubscribe = Auth.onAuthStateChanged((user) => {
        setIsLoggedIn(!!user);
      });
      return () => unsubscribe();
    }, []);

    const options = (
      <div className="dropdown-menu font-sans text-purple-200">
        {isLoggedIn ? <a href="#/">Profile</a> : <a href="#/">Home</a>}
        {isLoggedIn && <a href="#/browsing">Browse</a>}
        {isLoggedIn && <a href="#/results-summary">Results</a>}
        <a href="#/about">About</a>
        {isLoggedIn && <a onClick={() => Auth.signOut()}>Log Out</a>}
  </div>
);

    return (
            <nav className="navbar fixed top-0 w-full bg-gray-800 text-white p-4 flex items-center">
            <button className="text-2xl hover:scale-110 px-2" onClick={() => window.location.hash = "/"}>🐶 Woof Finder</button>
            <div className="ml-auto">
              <div className="nav-item dropdown" onClick={() => { setDropDownOpen(!isDropDownOpen) }}>
                <button className="text-xl font-bold text-purple-300 w-20 rounded hover:rounded-lg">
                  Menu
                </button>
                {isDropDownOpen && options}
              </div>
            </div>
          </nav>
          );
}

export default Navbar;


