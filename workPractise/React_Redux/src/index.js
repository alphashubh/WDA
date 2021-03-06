import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";

import App from './component/app'
import allReducers from "./reducers"

const store= createStore(allReducers);

render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root"));