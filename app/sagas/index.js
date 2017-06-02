import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { GET_TENNIS_GAMES } from '../constants';
import { getTennisGames } from '../actions';
import apiRequest from '../utils/request';

function* fetchTennisGames () {
    const url = `${process.env.REACT_APP_WEBAPI_URL}games`;
    const result = yield call(apiRequest, url);
    yield put(getTennisGames(result.data));
}

export function* getTennisGamesSaga () {
    yield takeLatest(GET_TENNIS_GAMES, fetchTennisGames);
}

export default function* root () {
    yield all([
        fork(getTennisGamesSaga)
    ]);
}