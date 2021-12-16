import {
    GET_REVIEW_BEGIN,
    GET_REVIEW_SUCCESS,
    GET_REVIEW_FAIL,
  } from "../../constants/types";
  
  const initialState = {
    userReview: {
      loading: false,
      error: null,
      details: [],
    },
  };
  
  export const review = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case GET_REVIEW_BEGIN:
        return {
          ...state,
          userReview: {
            ...state.userReview,
            loading: true,
            error: null,
          },
        };
      case GET_REVIEW_SUCCESS:
        return {
          ...state,
          userReview: {
            ...state.userReview,
            loading: false,
            error: null,
            details: payload,
          },
        };
      case GET_REVIEW_FAIL:
        return {
          ...state,
          userReview: {
            ...state.userReview,
            loading: false,
            error: error,
            details: [],
          },
        };
    }
  };