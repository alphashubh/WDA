import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'

import InputReducer from './reducer-input';

const allReducers =combineReducers({
   InputReducer, routing:routerReducer
});

export default allReducers;