import {
  FETCH_SEARCH_RECIPE_LOADING,
  FETCH_SEARCH_RECIPE_SUCCESS,
  FETCH_SEARCH_RECIPE_FAILURE,
} from '../actions/recipe.actions';

const INITIAL_STATE = {
  data: {},
  totalResults: 0,
  offset: 0,
  number: 0,
  error: null,
  loading: false,
};

const reducer = (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case FETCH_SEARCH_RECIPE_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case FETCH_SEARCH_RECIPE_SUCCESS: {
      return {
        ...state,
        data: payload.results.reduce((acc, res) => {
          const { id } = res;
          acc[id] = res;
          // fix images uri
          acc[id].image = `${payload.baseUri}${acc[id].image}`;
          acc[id].imageUrls = acc[id].imageUrls.map(img => `${payload.baseUri}${img}`);
          return acc;
        }, {}),
        totalResults: payload.totalResults,
        loading: false,
        error: null,
      }; }

    case FETCH_SEARCH_RECIPE_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
