import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./Register.css";
import bgCover from "../../Asset/Frame 4.svg";
import logo from "../../Asset/Group 2.svg";
import { Grid, Paper, Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Formik, Form } from "formik";
import TextBarRegis from "../TextBar/TextBarRegis";
import ButtonRegis from "../Button/ButtonRegis";
import * as Yup from "yup";
import Auth from "../Auth/Auth";
import AuthRegis from "../Auth/AuthRegis";
import { Link, useNavigate } from "react-router-dom";
import {RegisterAction} from '../../store/actions/auth'

function Register() {
  const { data: userData } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 20 character or less")
      .required("Required"),
    email: Yup.string()
      .email("Email is Invalid")
      .required("Required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Input Your Email"),
    password: Yup.string("Please Enter Your Password")
      .required("Password must be required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password Must be at least 8 Characters"
      ),
    confirmPassword: Yup.string()
      .required("Re-enter your password")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='register-page'>
      <div className='register-background'>
        <img className='bg-image' src={bgCover} alt='background image' />
        <Grid container>
          <Grid item xl={6}>
            <Link to='/'>
              <img className='logo-image' src={logo} alt='logo image' />
            </Link>
          </Grid>
          <Grid item xl={6}>
            <Box
              sx={{
                backgroundColor: "white",
                width: "100%",
                height: "911px",
                borderRadius: "80px 0 0 80px",
                marginTop: "60px",
                boxShadow: "0px 4px 24px 4px rgba(0, 0, 0, 0.15)",
              }}>
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  passowrd: "",
                  confirmPassword: "",
                }}
                onSubmit={(values) => {
                  dispatch(RegisterAction(values));
                  navigate('/register/signup')
                  console.log(values)
                }}
                validationSchema={validate}>
                {(formikProps) => {
                  const {handleSubmit} = formikProps
                  return (
                  <div className='field-top'>
                    <div className='name-top'>
                      <h1>Create Account</h1>
                      <h6>
                        Already have account? <span>Login</span>
                      </h6>
                    </div>
                    {/* {console.log(formik.values)} */}
                    <form onSubmit={handleSubmit}>
                      <TextBarRegis
                        label='Username'
                        name='username'
                        type='text'
                        
                      />
                      <TextBarRegis 
                        label='Email' 
                        name='email' 
                        type='text' 
                      />
                      <TextBarRegis
                        label='Passowrd'
                        name='password'
                        type='password'
                      />
                      <TextBarRegis
                        label='Confirm Passowrd'
                        name='confirmPassword'
                        type='password'
                      />
                      {/* <Link to='/register/signup'> */}
                        <Box sx={{marginLeft: '88px', width:'700px', marginTop: '30px'}}>
                          <Button 
                            variant="contained"
                            // onClick={(e) => handleSubmit(formik.values)}
                            type="submit"
                            fullWidth
                            sx={{
                              height: '45px',
                              borderRadius: '24px',
                              background: 'linear-gradient(45deg, #B6340B 30%, #B6340B 90%)',
                              boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)'
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'Nunito',
                                fontWeight: 'bold',
                                fontSize: '16px',
                              }}
                            >
                              Sign Up
                            </Typography>
                          </Button>
                        </Box>
                      {/* </Link> */}
                    </form>
                  </div>
                )}}
              </Formik>
              <Divider
                sx={{
                  width: "700px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "20px",
                }}
              />
              <AuthRegis />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Register;
