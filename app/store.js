import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createOidcMiddleware from 'redux-oidc';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import userManager from './utils/userManager';

// create the middleware with the userManager
const oidcMiddleware = createOidcMiddleware(userManager);

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const createStoreWithMiddleware = compose(
    applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;
