import {
    POST_CART_BEGIN,
    POST_CART_SUCCESS,
    POST_CART_FAIL,
    GET_CART_BEGIN,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
  } from "../../constants/types";
  
  const initialState = {
    cartUser: {
      loading: false,
      error: null,
      details: [],
    },
  };
  
  export const addCart = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case POST_CART_BEGIN:
        return {
          ...state,
          cartUser: {
            ...state.cartUser,
            loading: true,
            error: null,
          },
        };
      case POST_CART_SUCCESS:
        return {
          ...state,
          cartUser: {
            ...state.cartUser,
            loading: false,
            error: null,
            details: payload,
          },
        };
      case POST_CART_FAIL:
        return {
          ...state,
          cartUser: {
            ...state.cartUser,
            loading: false,
            error: error,
            details: [],
          },
        };
      case GET_CART_BEGIN:
        return {
          ...state,
          cartUser: {
            ...state.cartUser,
            loading: true,
            error: null,
          },
        };
      case GET_CART_SUCCESS:
        return {
          ...state,
          cartUser: {
            ...state.cartUser,
            loading: false,
            error: null,
            details: payload,
          },
        };
      case GET_CART_FAIL:
        return {
          ...state,
          cartUser: {
            ...state.cartUser,
            loading: false,
            error: error,
            details: [],
          },
        };
    }
  };