export const FETCH_SEARCH_RECIPE_REQUEST = 'FETCH_SEARCH_RECIPE_REQUEST';
export const FETCH_SEARCH_RECIPE_LOADING = 'FETCH_SEARCH_RECIPE_LOADING';
export const FETCH_SEARCH_RECIPE_SUCCESS = 'FETCH_SEARCH_RECIPE_SUCCESS';
export const FETCH_SEARCH_RECIPE_FAILURE = 'FETCH_SEARCH_RECIPE_FAILURE';

export const fetchSearchRecipe = query => ({
  type: FETCH_SEARCH_RECIPE_REQUEST,
  query,
});

export const fetchSearchRecipeLoading = () => ({
  type: FETCH_SEARCH_RECIPE_LOADING,
});

export const fetchSearchRecipeSuccess = payload => ({
  type: FETCH_SEARCH_RECIPE_SUCCESS,
  payload,
});

export const fetchSearchRecipeFailure = payload => ({
  type: FETCH_SEARCH_RECIPE_FAILURE,
  error: payload,
});
