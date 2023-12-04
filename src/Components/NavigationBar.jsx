import {React, useState } from "react";
import ChevronIcon from "../assets/chevron.svg?react"


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

    function NavBar(){
        return(
            <nav className="navbar">
                <ul className="navbar-nav">props.children</ul>
            </nav>
        )
    }
    
    function NavItem(props){
        const [open, setOpen] = useState(false);
    
        return(
            <li className="nav-item">
                <a href="#/browsing" className="option-button" onClick={()=>setOpen(!open)}>
                    {props.item}
                </a>
                {open && props.children}
            </li>
        );
    }

    function DropDownMenu(){
        return(<></>);
    }

    function DropDownItem(props){

    }

    return(
        <NavBar>
            <NavItem item = {<ChevronIcon/>}></NavItem>
        </NavBar>
    )
}

export default Navigation;