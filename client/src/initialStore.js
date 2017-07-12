import { createStore, applyMiddleware } from 'redux'
import combineReducers from './reducers'
import thunk from 'redux-thunk'

const reduxDevExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialStore = createStore(
    combineReducers,
    applyMiddleware(thunk),
    reduxDevExtension
);

export default initialStore;
