import React from "react";
import { render } from "react-dom";
// import {Provider} from "react-redux";
// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'

// import App from './component/app';
// import Input from './component/input';
// import PrinitingState from './component/printingState';
// import Timeline from './component/timeline';
// import configureStore from './store';
// import RequestPage from './component/requestPage';
// import UserForm from './component/userform';

// const store=configureStore();
// const history = syncHistoryWithStore(browserHistory, store);
import { BrowserRouter } from 'react-router-dom'
import App from './component/app';

render(
     <BrowserRouter>
    <App />
  </BrowserRouter>
    , document.getElementById('root'));
