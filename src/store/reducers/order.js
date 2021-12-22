import {
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  PATCH_ORDER_BEGIN,
  PATCH_ORDER_SUCCESS,
  PATCH_ORDER_FAIL,
  POST_PAYMENT_BEGIN,
  POST_PAYMENT_SUCCESS,
  POST_PAYMENT_FAIL,
} from "../../constants/types";

const initialState = {
  orderDetails: {
    loading: false,
    error: null,
    orderList: [],
  },
};

export const order = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_ORDER_BEGIN:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: true,
          error: null,
        },
      }
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: false,
          error: null,
          orderList: payload,
        },
      }
    case GET_ORDER_FAIL:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: false,
          error: null,
          orderList: [],
        },
      }
    case PATCH_ORDER_BEGIN:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: true,
          error: null,
        },
      }
    case PATCH_ORDER_SUCCESS:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: false,
          error: null,
          orderList: payload,
        },
      }
    case PATCH_ORDER_FAIL:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: false,
          error: null,
          orderList: [],
        },
      }
    case POST_PAYMENT_BEGIN:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: true,
          error: null,
        },
      }
    case POST_PAYMENT_SUCCESS:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: false,
          error: null,
          orderList: payload,
        },
      }
    case POST_PAYMENT_FAIL:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          loading: false,
          error: null,
          orderList: [],
        },
      }
      default:
        return {
          ...state,
        };
  }
};
