import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';
const InitialState = {};
const  Middleware = [thunk];
const store = createStore(rootReducer,InitialState,applyMiddleware(...Middleware));

export default store;