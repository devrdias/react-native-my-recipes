import { put, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../services/NavigationService';
import { STARTUP } from '../actions/startup.actions';

function* startup() {
  // yield put(() => {});

  NavigationService.navigateAndReset('Search');
}

export function* watchStartup() {
  yield takeLatest(STARTUP, startup);
}
