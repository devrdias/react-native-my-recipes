// response.ok       - Boolean - True is the status code is in the 200's; false otherwise.
// response.problem  - String  - One of 6 different values (see below - problem codes)
// response.data     - Object  - this is probably the thing you're after.
// response.status   - Number  - the HTTP response code
// response.headers  - Object  - the HTTP response headers
// response.config   - Object  - the `axios` config object used to make the request
// response.duration - Number  - the number of milliseconds it took to run this request
// @see https://www.npmjs.com/package/apisauce
import { create } from 'apisauce';
import { Config } from '../config';

const ClientAPI = create({
  baseURL: Config.RECIPE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': Config.RAPID_API_HOST,
    'x-rapidapi-key': Config.RAPID_API_KEY,
  },
  timeout: 3000,
});

const handleResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(new Error(response.problem));
  }
  if (response.data === 'CLIENT_ERROR') {
    return Promise.reject(new Error(`CLIENT_ERROR/${response.data.message}`));
  }
  return response.data;
};


// Search recipes in natural language - no filters
const search = async (query, offset = 0, number = 100) => {
  const endpoint = `search/?query=${query}&offset=${offset}&number=${number}`;
  const response = await ClientAPI.get(endpoint);
  return handleResponse(response);
};

// GET - get detail information about a recipe
const getRecipeDetail = async (id) => {
  const endpoint = `${id}/information`;
  const response = await ClientAPI.get(endpoint);
  return handleResponse(response);
};


// GET - Search Recipes
const getSearchRecipes = async ({ category, filter }, offset = 0, number = 100) => {
  let endpoint = `search/?offset=${offset}&number=${number}`;
  endpoint += filter && `&${category}=${filter.toLowerCase()}`;
  const response = await ClientAPI.get(endpoint);
  return handleResponse(response);
};

// GET - Get Recipe Nutrition
const getRecipeNutrition = async (id) => {
  const endpoint = `${id}/nutritionWidget.json`;
  const response = await ClientAPI.get(endpoint);
  return handleResponse(response);
};

// GET - Summarize Recipe
const getRecipeSummary = async (id) => {
  const endpoint = `${id}/summary`;
  const response = await ClientAPI.get(endpoint);
  return handleResponse(response);
};

// TODO: implement push notifications One Per Day
// GET - Get Random Recipes
// tags {vegetarian,dessert}
const getRandomRecipes = (number, tags) => {};

// GET - Autocomplete Recipe Search
const autoCompleteRecipeSearch = () => {};

// GET - Get food information
const getFoodInformation = (id) => {};


// GET - Get Similar Recipes
const getSimilarRecipes = (id) => {};


// GET - Convert Amounts
const getConvertAmounts = (ingredientName, targetUnit) => {};

// GET - Get Wine Description
const getWineDescription = (grape) => {};

// GET - Get Wine Pairing
const getWinePairing = (food) => {};

// GET - Get product information
const getProductInformation = (id) => {};

// GET - Get Analyzed Recipe Instructions
const getAnalyzedRecipeInstructions = (id, stepBreakdown = true) => {};


// TODO: implement search recipe by ingredients


export const RecipeService = {
  search,
  getRecipeDetail,
  getSearchRecipes,
  getRecipeNutrition,
  getRecipeSummary,
};
