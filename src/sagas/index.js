/* istanbul ignore file */
import {
    call,
    takeEvery,
    takeLatest,
    all,
    put,
} from 'redux-saga/effects'
import * as Api from '../api'
import {
    CHARACTERES_FETCH_REQUESTED,
    CHARACTER_FETCH_REQUESTED,
} from '../constants/Types'

import {
    updateCharacter,
    updateCharacteres,
} from '../actions/character'

function* fetchCharacter(action) {
    const character = yield call(Api.fetchCharacter, action.id)
    yield put(updateCharacter(character))
}

function* fetchCharacteres() {
    const characteres = yield call(Api.fetchCharacteres)
    yield put(updateCharacteres(characteres))
}

function* fetchCharacteresSaga() {
  yield takeLatest(CHARACTERES_FETCH_REQUESTED, fetchCharacteres);
}

function* fetchCharacterSaga() {
  yield takeEvery(CHARACTER_FETCH_REQUESTED, fetchCharacter);
}

export default function* rootSaga() {
    yield all([
        fetchCharacteresSaga(),
        fetchCharacterSaga(),
    ]);
}