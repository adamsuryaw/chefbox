import {
    GET_LOGIN_BEGIN,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAIL,
    REGISTER_BEGIN,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SIGNUP_BEGIN,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  } from "../../constants/types";
  
  const initialState = {
    login: [],
    loading: false,
    error: null,
    detailLogin: {
      loading: false,
      error: null,
      details: {},
    },
  };
  
  const login = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case GET_LOGIN_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          login: payload,
        };
      case GET_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: error,
          login: [],
        };
      case REGISTER_BEGIN:
        return {
          ...state,
          detailLogin: {
            loading: true,
            error: null,
          },
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          detailLogin: {
            loading: false,
            error: null,
            details: payload,
          },
        };
      case REGISTER_FAIL:
        return {
          ...state,
          detailLogin: {
            loading: false,
            error: error,
            details: [],
          },
        };
      case SIGNUP_BEGIN:
        return {
          ...state,
          detailLogin: {
            loading: true,
            error: null,
          },
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          detailLogin: {
            loading: false,
            error: null,
            details: payload,
          },
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          detailLogin: {
            loading: false,
            error: error,
            details: [],
          },
        };
    }
  };
  
  export default login;
