import { combineReducers } from 'redux';
import LoadingReducer from './loading.reducer';
import RecipeReducer from './recipe.reducer';

export default combineReducers({
  api: LoadingReducer,
  recipes: RecipeReducer,
});
