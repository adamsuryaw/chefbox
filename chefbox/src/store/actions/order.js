import { GET_ORDER_BEGIN } from "../../constants/types";

export const getOrder = () => {
  return {
    type: GET_ORDER_BEGIN,
  };
};