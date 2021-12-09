import { GET_RECIPE_BEGIN } from "../../constants/types";

export const getRecipe = () => {
  return {
    type: GET_RECIPE_BEGIN,
  };
};
export const getRecipeDetails = (id) => {
  return {
    type: GET_RECIPE_BEGIN,
    id,
  };
};
