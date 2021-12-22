import { GET_ORDER_BEGIN, PATCH_ORDER_BEGIN, POST_PAYMENT_BEGIN } from "../../constants/types";

export const getOrder = () => {
  return {
    type: GET_ORDER_BEGIN,
  };
};

export const patchOrder = (data, id) => {
  console.log("data patch", "id", data, id);
  return {
    type: PATCH_ORDER_BEGIN,
    data,
    id,
  };
};

export const postOrderPay = (body) => {
  // console.log("data post order pay");
  return {
    type: POST_PAYMENT_BEGIN,
    // data,
    body
  };
};
