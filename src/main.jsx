import './styles/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presenter/app.jsx';
import Model from "./model/appModel.js";
import { observable, configure } from "mobx";

configure({ enforceActions: "never", });  // we don't use Mobx actions
const model = observable(Model);

ReactDOM.createRoot(document.getElementById('root')).render(<App model={model}/>);
window.myModel = model;
model.generateDisplayDog();