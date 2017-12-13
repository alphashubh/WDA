import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './component/app';
import Input from './component/input';
import PrinitingState from './component/printingState';
import Timeline from './component/timeline';
import configureStore from './store';

const store=configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
         <Router history={history}>
            <Route path='/' component={App} />
            <Route path='/index.html' component={App} />
            <Route path='/timeline.html' component={Timeline}/>
            <Route path='/details.html' component={PrinitingState}/>
        </Router>
        </Provider>
    , document.getElementById('root'));
