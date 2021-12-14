import { GET_LOCATION_BEGIN, GET_LOCATION_SUCCESS, GET_LOCATION_FAIL } from "../../constants/types";

const initialState = {
  listLocation: {
    loading: false,
    error: null,
    list: [],
  },
};

export const location = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_LOCATION_BEGIN:
      return {
        ...state,
        listLocation: {
          ...state.listLocation,
          loading: true,
          error: null,
        },
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        listLocation: {
          ...state.listLocation,
          loading: false,
          error: null,
          list: payload,
        },
      };
    case GET_LOCATION_FAIL:
      return {
        ...state,
        listLocation: {
          ...state.listLocation,
          loading: false,
          error: error,
          list: [],
        },
      };
  }
};