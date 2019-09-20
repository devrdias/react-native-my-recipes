import { put, takeLatest } from 'redux-saga/effects';
import { fetchCoinData } from '../actions/cryptoActions';
import NavigationService from '../../services/NavigationService';
import { STARTUP } from '../actions/startupActions';

function* startup() {
  yield put(fetchCoinData());

  // NavigationService.navigateAndReset('HomeScreen');
}

export function* watchStartup() {
  yield takeLatest(STARTUP, startup);
}
