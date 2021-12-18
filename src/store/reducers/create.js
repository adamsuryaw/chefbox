import {
  POST_CREATE_BEGIN,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  PUT_CREATE_BEGIN,
  PUT_CREATE_SUCCESS,
  PUT_CREATE_FAIL,
} from "../../constants/types";

const initialState = {
  createUser: {
    loading: false,
    error: null,
    details: [],
  },
};

export const create = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case POST_CREATE_BEGIN:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: true,
          error: null,
        },
      };
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: null,
          details: payload,
        },
      };
    case POST_CREATE_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: error,
          details: [],
        },
      };
    case PUT_CREATE_BEGIN:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: true,
          error: null,
        },
      };
    case PUT_CREATE_SUCCESS:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: null,
          details: payload,
        },
      };
    case PUT_CREATE_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: error,
          details: [],
        },
      };
  }
};
