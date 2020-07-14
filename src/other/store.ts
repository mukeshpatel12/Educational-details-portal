import { createStore, applyMiddleware } from "redux";
import reduxLogger from 'redux-logger';
import reduxThunk from "redux-thunk";
import reducer from './reducer';

const middlewares = [reduxLogger, reduxThunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
