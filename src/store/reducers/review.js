import {
    GET_REVIEW_BEGIN,
    GET_REVIEW_SUCCESS,
    GET_REVIEW_FAIL,
    POST_REVIEW_BEGIN,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAIL,
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
      case POST_REVIEW_BEGIN:
        return {
          ...state,
          userReview: {
            ...state.userReview,
            loading: true,
            error: null,
          },
        };
      case POST_REVIEW_SUCCESS:
        return {
          ...state,
          userReview: {
            ...state.userReview,
            loading: false,
            error: null,
            details: payload,
          },
        };
      case POST_REVIEW_FAIL:
        return {
          ...state,
          userReview: {
            ...state.userReview,
            loading: false,
            error: error,
            details: [],
          },
        };
      default:
        return {
          ...state,
        };
    }
  };