import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../../constants/types";

const initialState = {
  userDetails: {
    loading: false,
    error: null,
    details: [],
  },
};

export const userDetails = (state = initialState, action) => {
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
  }
};
