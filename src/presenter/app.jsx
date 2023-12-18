import React, { useState, useEffect } from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Welcome from './welcomePresenter.jsx';
import About from './aboutPresenter.jsx';
import Browsing from './browsingPresenter.jsx';
import Profile from './profilePresenter.jsx'
import ResultDetails from './resultDetailsPresenter.jsx';
import ResultsSummary from './resultsSummaryPresenter.jsx';
import NavBar from '../components/navbar.jsx';
import Auth from '../services/auth.js';
import Model from "../model/appModel.js";
import { observable, configure } from "mobx";
import {observer} from "mobx-react-lite"

configure({ enforceActions: "never", });  // we don't use Mobx actions
const model = observable(Model);
// model.getNearbyOrganizations(); // Maybe remove

export default observer (function App(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(Auth.getCurrentUser() !== null);
  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      if (!!user) {
        model.initializeModel()
      } else {
        model.clearModel()
      }
    })
  }, []);

  function makeRouter() {
    return createHashRouter([
      {
        path: '/',
        element:  isAuthenticated ? <Profile model={model}/> : <Welcome/>,
      },
      {
        path: '/browsing',
        element: isAuthenticated ? <Browsing model={model} /> : <Navigate to="/" replace />,
      },
      {
        path: '/result-details',
        element: isAuthenticated ? <ResultDetails model={model} /> : <Navigate to="/" replace />,
      },
      {
        path: '/results-summary',
        element: isAuthenticated ? <ResultsSummary model={model} /> : <Navigate to="/" replace />,
      },
      {
        path: '/about',
        element: <About isAuthenticated={isAuthenticated}/>,

      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ]);
  }

  return (
    <div>
      <NavBar isAuthenticated={isAuthenticated}/>
      <RouterProvider router={makeRouter()} />
    </div>
  );
})