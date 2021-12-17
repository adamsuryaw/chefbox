import { POST_CART_BEGIN } from "../../constants/types";

export const addToCart = (id, body) => {
    return {
      type: POST_CART_BEGIN,
      id,
      body
    };
};