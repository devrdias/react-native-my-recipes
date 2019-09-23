import { call, put, takeLatest } from 'redux-saga/effects';
import { RecipeService } from '~/services/RecipeService';
import {
  fetchSearchRecipeFailure,
  fetchSearchRecipeLoading,
  fetchSearchRecipeSuccess,
  fetchRecipeDetailFailure,
  fetchRecipeDetailLoading,
  fetchRecipeDetailSuccess,
  fetchRecipeByCategoryFailure,
  fetchRecipeByCategoryLoading,
  fetchRecipeByCategorySuccess,
  FETCH_SEARCH_RECIPE_REQUEST,
  FETCH_RECIPE_DETAIL_REQUEST,
  FETCH_RECIPE_BY_CATEGORY_REQUEST,
} from '../actions/recipe.actions';

/**
 * Search recipes
 * @param {query} query
 */
function* searchRecipeAsync({ query }) {
  yield put(fetchSearchRecipeLoading());
  try {
    const data = yield call(RecipeService.search, query);
    yield put(fetchSearchRecipeSuccess(data));
  } catch (error) {
    yield put(fetchSearchRecipeFailure('Error API.', error));
  }
}
export function* watchFetchRecipes() {
  yield takeLatest(FETCH_SEARCH_RECIPE_REQUEST, searchRecipeAsync);
}


/**
 * Get detail information about recipe
 * @param {id} id
 */
function* getRecipeDetailAsync({ id }) {
  yield put(fetchRecipeDetailLoading());
  try {
    const data = yield call(RecipeService.getRecipeDetail, id);
    yield put(fetchRecipeDetailSuccess(data));
  } catch (error) {
    yield put(fetchRecipeDetailFailure('Error API.', error));
  }
}
export function* watchGetSearchRecipes() {
  yield takeLatest(FETCH_RECIPE_DETAIL_REQUEST, getRecipeDetailAsync);
}


/**
 * Search food by category and filter
 * @param {category} category
 * @param {filter} filter
 */
function* fetchRecipeByCategory({ category, filter }) {
  yield put(fetchRecipeByCategoryLoading());
  try {
    const data = yield call(RecipeService.getSearchRecipes, category, filter);
    yield put(fetchRecipeByCategorySuccess(data));
  } catch (error) {
    yield put(fetchRecipeByCategoryFailure('Error API.', error));
  }
}
export function* watchFetchRecipeByCategory() {
  yield takeLatest(FETCH_RECIPE_BY_CATEGORY_REQUEST, fetchRecipeByCategory);
}
