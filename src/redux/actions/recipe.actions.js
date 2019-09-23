export const FETCH_SEARCH_RECIPE_REQUEST = 'FETCH_SEARCH_RECIPE_REQUEST';
export const FETCH_SEARCH_RECIPE_LOADING = 'FETCH_SEARCH_RECIPE_LOADING';
export const FETCH_SEARCH_RECIPE_SUCCESS = 'FETCH_SEARCH_RECIPE_SUCCESS';
export const FETCH_SEARCH_RECIPE_FAILURE = 'FETCH_SEARCH_RECIPE_FAILURE';

export const FETCH_RECIPE_DETAIL_REQUEST = 'FETCH_RECIPE_DETAIL_REQUEST';
export const FETCH_RECIPE_DETAIL_LOADING = 'FETCH_RECIPE_DETAIL_LOADING';
export const FETCH_RECIPE_DETAIL_SUCCESS = 'FETCH_RECIPE_DETAIL_SUCCESS';
export const FETCH_RECIPE_DETAIL_FAILURE = 'FETCH_RECIPE_DETAIL_FAILURE';

export const TOGGLE_FAVORITE_RECIPE = 'TOGGLE_FAVORITE_RECIPE';
export const RESET_SEARCH_RECIPE = 'RESET_SEARCH_RECIPE';

export const FETCH_RECIPE_BY_CATEGORY_REQUEST = 'FETCH_RECIPE_BY_CATEGORY_REQUEST';
export const FETCH_RECIPE_BY_CATEGORY_LOADING = 'FETCH_RECIPE_BY_CATEGORY_LOADING';
export const FETCH_RECIPE_BY_CATEGORY_SUCCESS = 'FETCH_RECIPE_BY_CATEGORY_SUCCESS';
export const FETCH_RECIPE_BY_CATEGORY_FAILURE = 'FETCH_RECIPE_BY_CATEGORY_FAILURE';


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

/**
 *
 * Load detail information
 */
export const fetchRecipeDetail = id => ({
  type: FETCH_RECIPE_DETAIL_REQUEST,
  id,
});

export const fetchRecipeDetailLoading = () => ({
  type: FETCH_RECIPE_DETAIL_LOADING,
});

export const fetchRecipeDetailSuccess = payload => ({
  type: FETCH_RECIPE_DETAIL_SUCCESS,
  payload,
});

export const fetchRecipeDetailFailure = payload => ({
  type: FETCH_RECIPE_DETAIL_FAILURE,
  error: payload,
});

/**
 * Favorite recipe
 */
export const toggleFavoriteRecipe = id => ({
  type: TOGGLE_FAVORITE_RECIPE,
  payload: { id },
});

/**
 * Reset search recipe
 */
export const resetSearchRecipe = () => ({
  type: RESET_SEARCH_RECIPE,
});


/**
 * Fetch by category
 */
export const fetchRecipeByCategory = (category, filter) => ({
  type: FETCH_RECIPE_BY_CATEGORY_REQUEST,
  category,
  filter,
});

export const fetchRecipeByCategoryLoading = () => ({
  type: FETCH_RECIPE_BY_CATEGORY_LOADING,
});

export const fetchRecipeByCategorySuccess = payload => ({
  type: FETCH_RECIPE_BY_CATEGORY_SUCCESS,
  payload,
});

export const fetchRecipeByCategoryFailure = payload => ({
  type: FETCH_RECIPE_BY_CATEGORY_FAILURE,
  error: payload,
});
