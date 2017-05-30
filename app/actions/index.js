import { CALL_WEBAPI_START, CALL_WEBAPI_SUCCESS } from '../constants';

export const callWebAPIStart = () => ({
    type: CALL_WEBAPI_START
});

export const callWebAPISuccess = (claims) => ({
    type: CALL_WEBAPI_SUCCESS,
    payload: claims
});
