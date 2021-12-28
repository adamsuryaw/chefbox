import { GET_RECIPE_BEGIN, GET_RECIPE_DETAILS_BEGIN, GET_FILTER_RECIPE_BEGIN, GET_SEARCH_RECIPE_BEGIN, PAGINATION_BEGIN, GET_MYRECIPE_BEGIN, DELETE_RECIPE_BEGIN } from "../../constants/types";

export const getRecipe = (page) => {
  return {
    type: GET_RECIPE_BEGIN,
    page
  };
};

export const delRecipe = (id) => {
  return {
    type: DELETE_RECIPE_BEGIN,
    id
  };
};

export const getMyRecipe = (page) => {
  return {
    type: GET_MYRECIPE_BEGIN,
    page
  };
};


// export const getRecipe = (page, params) => {
//   return {
//     type: GET_RECIPE_BEGIN,
//     page,
//     params
//   };
// };
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
export const getSearchRecipe = (data) => {
  console.log(data, "data action")
  return {
    type: GET_SEARCH_RECIPE_BEGIN,
    payload: data,
  };
};

// export const getPagination = (page) => {
//   return {
//     type: PAGINATION_BEGIN,
//     page,
//   };
// };
