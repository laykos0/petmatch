import React, { useState, useEffect } from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Welcome from './welcomePresenter.jsx';
import Browsing from './browsingPresenter.jsx';
import ResultDetails from './resultDetailsPresenter.jsx';
import ResultsSummary from './resultsSummaryPresenter.jsx';
import NavBar from '../components/navbar.jsx';
import Auth from '../services/auth.js';
import Model from "../model/appModel.js";
import { observable, configure } from "mobx";
import {observer} from "mobx-react-lite"

configure({ enforceActions: "never", });  // we don't use Mobx actions
const model = observable(Model);

export default observer( function App(props){

    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  function makeRouter() {
    return createHashRouter([
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/browsing',
        element: isAuthenticated ? <Browsing model={props.model} /> : <Navigate to="/" replace />,
      },
      {
        path: '/result-details',
        element: isAuthenticated ? <ResultDetails model={props.model} /> : <Navigate to="/" replace />,
      },
      {
        path: '/results-summary',
        element: isAuthenticated ? <ResultsSummary model={props.model} /> : <Navigate to="/" replace />,
      },
    ]);
  }

  return (
    <div>
      <NavBar />
      <RouterProvider router={makeRouter()} />
    </div>
  );
})