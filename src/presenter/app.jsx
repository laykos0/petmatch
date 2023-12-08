import Welcome from "./welcomePresenter.jsx";
import Browsing from "./browsingPresenter.jsx"
import ResultDetails from "./resultDetailsPresenter.jsx"
import ResultsSummary from "./resultsSummaryPresenter.jsx";
import NavBar from '../components/navbar.jsx';

import {observer} from "mobx-react-lite"

import { createHashRouter, RouterProvider } from "react-router-dom";


export default observer( function App(props){

    function makeRouter(props){
        return createHashRouter([
        {
            path: "/",
            element: <Welcome/>,
        },
        {
            path: "/browsing",
            element: <Browsing/>,
        },
        {
            path: "/result-details",
            element: <ResultDetails model={props.model}/>,
        },
        {
            path: "/results-summary",
            element: <ResultsSummary model={props.model}/>,
        },
        
    ])
    }
    return (<div> 
                <NavBar/>
                <RouterProvider router={makeRouter(props)} />
            </div>
    );
}
)

