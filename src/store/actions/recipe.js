import { GET_RECIPE_BEGIN, GET_RECIPE_DETAILS_BEGIN, GET_FILTER_RECIPE_BEGIN, PAGINATION_BEGIN } from "../../constants/types";

export const getRecipe = () => {
  return {
    type: GET_RECIPE_BEGIN,
  };
};
export const getRecipeDetails = (id) => {
  return {
    type: GET_RECIPE_DETAILS_BEGIN,
    id,
  };
};
export const getFilterRecipe = (data) => {
  console.log(data, "data action")
  return {
    type: GET_FILTER_RECIPE_BEGIN,
    data,
  };
};

export const getPagination = (page) => {
  return {
    type: PAGINATION_BEGIN,
    page,
  };
};
