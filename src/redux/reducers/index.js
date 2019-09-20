import { combineReducers } from 'redux';
import CryptoReducer from './cryptoReducer';
import LoadingReducer from './loadingReducer';
import RecipeReducer from './recipe.reducer';

/**
 * Registrar TODOS os reducers neste arquivo
 *
 * @see https://redux.js.org/api-reference/combinereducers
 */
export default combineReducers({
  api: LoadingReducer,
  crypto: CryptoReducer,
  recipes: RecipeReducer,
});
