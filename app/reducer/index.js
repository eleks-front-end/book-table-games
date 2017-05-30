import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import webapiReducer from './webapi';

const reducer = combineReducers(
    {
        routing: routerReducer,
        oidc: oidcReducer,
        webapi: webapiReducer
    }
);

export default reducer;
