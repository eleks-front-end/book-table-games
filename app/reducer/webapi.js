import { CALL_WEBAPI_SUCCESS } from '../constants';
import { SESSION_TERMINATED, USER_EXPIRED } from 'redux-oidc';

const initialState = {
    claims: null
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case SESSION_TERMINATED:
        case USER_EXPIRED:
            return Object.assign({}, { ...state }, { claims: null });
        case CALL_WEBAPI_SUCCESS:
            return Object.assign({}, { ...state }, { claims: action.payload });
        default:
            return state;
    }
}
