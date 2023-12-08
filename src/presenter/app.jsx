import Welcome from "./welcomePresenter.jsx";
import Browsing from "./browsingPresenter.jsx"
import ResultDetails from "./resultDetailsPresenter.jsx"
import ResultsSummary from "./resultsSummaryPresenter.jsx";
import NavBar from '../components/navbar.jsx';

import {observer} from "mobx-react-lite"

import { createHashRouter, RouterProvider } from "react-router-dom";
import Model from "../model/appModel.js";
import { observable, configure } from "mobx";

configure({ enforceActions: "never", });  // we don't use Mobx actions
const model = observable(Model);
model.generateDisplayDog();

export default observer (function App(){

    function makeRouter(){
        return createHashRouter([
        {
            path: "/",
            element: <Welcome/>,
        },
        {
            path: "/browsing",
            element: <Browsing model={model} />,
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
    return (<div> 
                <NavBar/>
                <RouterProvider router={makeRouter()} />
            </div>
    );
}
)

