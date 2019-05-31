import {createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducers from './reducers';
import {createLogger} from 'redux-logger';

const log = createLogger({diff: true,collapsed: true});

//a function which can create our state and autopersist the data
export default (initialState = {}) =>{

    //Middleware Configuration
    const Middleware = [thunk,log];

    //Store Enhancers
    const enhancers = [];

    //Store Instatiation
    const store = createStore(
        makeRootReducers(),
        initialState,
        compose(
            applyMiddleware(...Middleware),
            ...enhancers
        )
    );
    return store;
}