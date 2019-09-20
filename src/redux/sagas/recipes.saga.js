import { call, put, takeLatest } from 'redux-saga/effects';
import { RecipeService } from '~/services/RecipeService';
import {
  fetchSearchRecipeFailure,
  fetchSearchRecipeLoading,
  fetchSearchRecipeSuccess,
  FETCH_SEARCH_RECIPE_REQUEST,
} from '../actions/recipe.actions';

function* fetchSearchRecipe({ query }) {
  yield put(fetchSearchRecipeLoading());

  const data = yield call(RecipeService.search, query);
  if (data !== 'CLIENT_ERROR') {
    yield put(fetchSearchRecipeSuccess(data));
  } else {
    yield put(fetchSearchRecipeFailure('Error API.'));
  }
}

export function* watchFetchRecipes() {
  yield takeLatest(FETCH_SEARCH_RECIPE_REQUEST, fetchSearchRecipe);
}
