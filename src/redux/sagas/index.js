import { all, fork } from 'redux-saga/effects';
import { watchStartup } from './startupSaga';
import {
  watchFetchRecipes,
  watchGetSearchRecipes,
  watchFetchRecipeByCategory,
} from './recipes.saga';


export default function* root() {
  yield all([
    fork(watchStartup), // Run when App starts
    fork(watchFetchRecipes),
    fork(watchGetSearchRecipes),
    fork(watchFetchRecipeByCategory),
  ]);
}
