import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import allReducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default function configureStore(initialState){
  return createStore(allReducers,initialState,middleware);
}