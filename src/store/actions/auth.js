import {
    GET_LOGIN_BEGIN
  } from "../../constants/types";
import {
    REGISTER_BEGIN
  } from "../../constants/types";
import {
    SIGNUP_BEGIN
  } from "../../constants/types";
  
  export const LoginAction = (body) => {
    return {
      type: GET_LOGIN_BEGIN,
      body
    };
  };
  
  export const RegisterAction = (body) => {
    return {
      type: REGISTER_BEGIN,
      body
    };
  };

  export const SignupAction = (body) => {
    return {
      type: SIGNUP_BEGIN,
      body
    };
  };
  