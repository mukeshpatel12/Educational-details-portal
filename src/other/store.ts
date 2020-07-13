import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import reducer from './reducer';

const middlewares = [logger, thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
