import { all, fork } from 'redux-saga/effects';
import { watchFetchCoinData } from './cryptoSagas';
import { watchStartup } from './startupSaga';
import { watchFetchRecipes } from './recipes.saga';
/**
 * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
 */
export default function* root() {
  yield all([
    fork(watchStartup), // Run when App starts
    fork(watchFetchCoinData),
    fork(watchFetchRecipes),
  ]);
}
