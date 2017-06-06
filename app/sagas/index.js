import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getTennisGames } from '../actions';
import apiRequest from '../utils/request';
import { GET_TENNIS_GAMES } from '../constants';

function * fetchTennisGames () {
    const url = `${process.env.REACT_APP_WEBAPI_URL}games`;
    const result = yield call(apiRequest, url);
    yield put(getTennisGames(result.data));
}

export function * watchFetchTennisGames () {
    yield takeLatest(GET_TENNIS_GAMES, fetchTennisGames);
}

export default function * root () {
    yield all([
        watchFetchTennisGames()
    ]);
}
