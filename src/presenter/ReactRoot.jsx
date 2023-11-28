// import Browsing from "./browsingPresenter.jsx"
// import ResultDetails from "./resultDetailsPresenter.jsx"
// import ResultsSummary from "./resultsSummaryPresenter.jsx";
// import Welcome from "./welcomePresenter.jsx";
//import {observer} from "mobx-react-lite"

import { createHashRouter, RouterProvider } from "react-router-dom";


export default function ReactRoot(){

    function makeRouter(){
        return createHashRouter([
        {
            path: "/",
            element: <div><p>WELCOME</p></div>,
        },
        {
            path: "/1",
            element: <div><p>WELCOME1</p></div>,
        },
        {
            path: "/browsing",
            element: <div><p>BROWSING</p></div>,
        },
        {
            path: "/result-details",
            element: <div><p>RESULTS DETAILS</p></div>,
        },
        {
            path: "/results-summary",
            element: <div><p>RESULTS SUMMARY</p></div>,
        },
        
    ])
    }
    return ( <div><RouterProvider router={makeRouter()} /></div> );
}

return ( <div><RouterProvider router={makeRouter()} /></div> );
