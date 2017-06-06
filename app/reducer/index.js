import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as oidcReducer } from 'redux-oidc';
import games from './games';

const reducer = combineReducers({
    routing: routerReducer,
    oidc: oidcReducer,
    games
});

export default reducer;
