import {
  GET_RECIPE_BEGIN,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAIL,
  GET_RECIPE_DETAILS_BEGIN,
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_FAIL,
  PAGINATION_BEGIN,
  PAGINATION_SUCCESS,
  PAGINATION_FAIL,
  GET_FILTER_RECIPE_BEGIN,
  GET_FILTER_RECIPE_SUCCESS,
  GET_FILTER_RECIPE_FAIL,
} from "../../constants/types";

const initialState = {
  listRecipe: {
    loading: false,
    error: null,
    list: [],
  },
  listDetails: {
    loading: false,
    error: null,
    details: {},
  },
  listFilter: {
    loading: false,
    error: null,
    filterList: [],
  },
};

export const recipe = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    
    case GET_RECIPE_BEGIN:
      return {
        ...state,
        listRecipe: {
          ...state.listRecipe,
          loading: true,
          error: null,
        },
      };
    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        listRecipe: {
          ...state.listRecipe,
          loading: false,
          error: null,
          list: payload,
        },
      };
    case GET_RECIPE_FAIL:
      return {
        ...state,
        listRecipe: {
          ...state.listRecipe,
          loading: false,
          error: error,
          list: [],
        },
      };
    case GET_RECIPE_DETAILS_BEGIN:
      return {
        ...state,
        listDetails: {
          ...state.listDetails,
          loading: true,
          error: null,
        },
      };
    case GET_RECIPE_DETAILS_SUCCESS:
      return {
        ...state,
        listDetails: {
          ...state.listDetails,
          loading: false,
          error: null,
          details: payload,
        },
      };
    case GET_RECIPE_DETAILS_FAIL:
      return {
        ...state,
        listDetails: {
          ...state.listDetails,
          loading: false,
          error: error,
          details: {},
        },
      };
    case PAGINATION_BEGIN:
      return {
        ...state,
        listRecipe: {
          ...state.listRecipe,
          loading: true,
          error: null,
        },
      };
    case PAGINATION_SUCCESS:
      return {
        ...state,
        listRecipe: {
          ...state.listRecipe,
          loading: false,
          error: null,
          list: payload,
        },
      };
    case PAGINATION_FAIL:
      return {
        ...state,
        listRecipe: {
          ...state.listRecipe,
          loading: false,
          error: error,
          list: [],
        },
      };
      case GET_FILTER_RECIPE_BEGIN:
        return {
          ...state,
          listFilter: {
            ...state.listFilter,
            loading: true,
            error: null,
          },
        };
      case GET_FILTER_RECIPE_SUCCESS:
        return {
          ...state,
          listFilter: {
            ...state.listFilter,
            loading: false,
            error: null,
            filterList: payload,
          },
        };
      case GET_FILTER_RECIPE_FAIL:
        return {
          ...state,
          listFilter: {
            ...state.listFilter,
            loading: false,
            error: error,
            filterList: [],
          },
        };
        default:
          return {
            ...state,
          };
  }
};
