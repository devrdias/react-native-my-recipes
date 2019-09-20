// Retorno padrao do apisauce:
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

const RecipeAPIClient = create({
  baseURL: Config.RECIPE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': Config.RAPID_API_HOST,
    'x-rapidapi-key': Config.RAPID_API_KEY,
  },
  timeout: 3000,
});

// Search recipes in natural language - no filters
const search = async (query, offset = 0, number = 100) => {
  const endpoint = `search/?query=${query}&offset=${offset}&number=${number}`;
  const response = await RecipeAPIClient.get(endpoint);

  if (response.ok) {
    return response.data;
  }
  return response.problem;
};

export const RecipeService = {
  search,
};
