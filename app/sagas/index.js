import { call, put, takeLatest } from 'redux-saga/effects';
import { CALL_WEBAPI_START } from '../constants';
import { callWebAPISuccess } from '../actions';
import apiRequest from '../utils/request';

function* fetchWebAPIWorker () {
    const url = process.env.REACT_APP_WEBAPI_URL;
    const result = yield call(apiRequest, url);
    yield put(callWebAPISuccess(result.data));
}

export function* callWebAPISaga () {
    yield takeLatest(CALL_WEBAPI_START, fetchWebAPIWorker);
}
