import {
    LOGIN_BEGIN
  } from "../../constants/types";
  
  export const LoginAction = (body) => {
    return {
      type: LOGIN_BEGIN,
      body
    };
  };
  