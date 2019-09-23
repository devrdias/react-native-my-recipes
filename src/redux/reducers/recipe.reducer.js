import {
  TOGGLE_FAVORITE_RECIPE,
  RESET_SEARCH_RECIPE,
  FETCH_SEARCH_RECIPE_LOADING,
  FETCH_SEARCH_RECIPE_SUCCESS,
  FETCH_SEARCH_RECIPE_FAILURE,
  FETCH_RECIPE_DETAIL_LOADING,
  FETCH_RECIPE_DETAIL_SUCCESS,
  FETCH_RECIPE_DETAIL_FAILURE,
  FETCH_RECIPE_BY_CATEGORY_LOADING,
  FETCH_RECIPE_BY_CATEGORY_SUCCESS,
  FETCH_RECIPE_BY_CATEGORY_FAILURE,
} from '../actions/recipe.actions';

const INITIAL_STATE = {
  data: {},
  favorites: {},
  totalResults: 0,
  offset: 0,
  number: 0,
  error: null,
  loading: false,
};

const reducer = (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case FETCH_SEARCH_RECIPE_LOADING:
    case FETCH_RECIPE_DETAIL_LOADING:
    case FETCH_RECIPE_BY_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case FETCH_RECIPE_BY_CATEGORY_SUCCESS:
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
      };
    }

    case FETCH_RECIPE_BY_CATEGORY_FAILURE:
    case FETCH_SEARCH_RECIPE_FAILURE:
    case FETCH_RECIPE_DETAIL_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        error,
      };


    case FETCH_RECIPE_DETAIL_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: { ...state.data[payload.id], ...payload },
        },
        totalResults: payload.totalResults,
        loading: false,
        error: null,
      };
    }

    case TOGGLE_FAVORITE_RECIPE: {
      const toggle = !!state.data[payload.id];
      const temp = state.data.favorites;
      if (!toggle) {
        delete temp[payload.id];
      }

      return {
        ...state,
        favorites: toggle ? { ...state.favorites, ...state.data[payload.id] } : temp,
      };
    }

    case RESET_SEARCH_RECIPE: {
      return {
        ...state,
        data: {},
      };
    }


    default:
      return state;
  }
};

export default reducer;
