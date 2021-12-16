import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  PATCH_PROFILE_BEGIN,
  PATCH_PROFILE_SUCCESS,
  PATCH_PROFILE_FAIL
} from "../../constants/types";

const initialState = {
  userDetails: {
    loading: false,
    error: null,
    details: [],
  },
};

export const account = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_USER_BEGIN:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: true,
          error: null,
        },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: false,
          error: null,
          details: payload,
        },
      };
    case GET_USER_FAIL:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: false,
          error: error,
          details: [],
        },
      };
    case PATCH_PROFILE_BEGIN:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: true,
          error: null,
        },
      };
    case PATCH_PROFILE_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: false,
          error: null,
          details: payload,
        },
      };
    case PATCH_PROFILE_FAIL:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: false,
          error: error,
          details: [],
        },
      };
  }
};
