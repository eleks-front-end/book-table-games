import { createStore, applyMiddleware, compose } from 'redux';
import createOidcMiddleware from 'redux-oidc';
import createSagaMiddleware from 'redux-saga';
// import createBrowserHistory from 'history';
// import { routerMiddleware } from 'react-router-redux';
// import { callWebAPISaga } from './sagas';
import reducer from './reducer';
import userManager from './utils/userManager';

// create the middleware with the userManager
const oidcMiddleware = createOidcMiddleware(userManager);

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, sagaMiddleware)
)(createStore);

// routerMiddleware(createBrowserHistory),
const store = createStoreWithMiddleware(reducer, initialState);

// sagaMiddleware.run(callWebAPISaga);

export default store;
