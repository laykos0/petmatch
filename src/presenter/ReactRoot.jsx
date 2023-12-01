import Browsing from "./browsingPresenter.jsx"
import ResultDetails from "./resultDetailsPresenter.jsx"
import ResultsSummary from "./resultsSummaryPresenter.jsx";
import Welcome from "./welcomePresenter.jsx";
import {observer} from "mobx-react-lite"

import { createHashRouter, RouterProvider } from "react-router-dom";
import Signup from "./signupPresenter.jsx";


export default observer (function ReactRoot(){

    function makeRouter(){
        return createHashRouter([
        {
            path: "/",
            //element: <Welcome/>,
            element: <Signup/>,
        },
        {
            path: "/browsing",
            element: <Browsing/>,
        },
        {
            path: "/result-details",
            element: <ResultDetails/>,
        },
        {
            path: "/results-summary",
            element: <ResultsSummary/>,
        },
        
    ])
    }
    return ( <div><RouterProvider router={makeRouter()} /></div> );
}
)

