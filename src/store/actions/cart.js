import { POST_CART_BEGIN, GET_CART_BEGIN } from "../../constants/types";

export const addToCart = (id, data) => {
    return {
      type: POST_CART_BEGIN,
      id,
      data
    };
};

export const viewCart = (data) => {
  return {
    type: GET_CART_BEGIN,
    payload: data
  };
};