import {
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  PATCH_ORDER_BEGIN,
  PATCH_ORDER_SUCCESS,
  PATCH_ORDER_FAIL,
} from "../../constants/types";

const initialState = {
  listOrder: [
    // list: {},
  ],
  loading: false,
  error: null,
};

export const order = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        // listOrder: {
        //   ...state.listOrder,
        // },
      };
    case GET_ORDER_SUCCESS:
      return {
        // ...state,
        ...state,
        loading: false,
        error: null,
        listOrder: payload,
        // list: payload,
      };
    case GET_ORDER_FAIL:
      return {
        // ...state,
        ...state,
        loading: false,
        error: error,
        listOrder: [],
        // list: [],
      };
    case PATCH_ORDER_BEGIN:
      return {
        ...state,
        listOrder: {
          // ...state,
        },
        loading: true,
        error: null,
      };
    case PATCH_ORDER_SUCCESS:
      return {
        ...state,
        listOrder: {
          // ...state.listOrder,
        },
        loading: false,
        error: null,
        list: payload,
      };
    case PATCH_ORDER_FAIL:
      return {
        ...state,
        listOrder: {
          // ...state.listOrder,
        },
        loading: false,
        error: error,
        list: [],
      };
  }
};
