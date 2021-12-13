import React from "react";
import "./Cover.css";
import { useDispatch, useSelector } from 'react-redux';
import bgCover from "../../Asset/Frame 4.svg";
import logo from "../../Asset/Group 2.svg";
import { Grid, Paper, Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Formik, Form } from "formik";
import TextBarLogin from "../TextBar/TextBarLogin";
import ButtonComp from "../Button/Button";
import * as Yup from "yup";
import Auth from "../Auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../../store/actions/auth";

function Cover() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is Invalid")
      .required("Required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Input Your Email"),
  });
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='cover-page'>
      <div className='cover-background'>
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
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  dispatch(LoginAction(values));
                  navigate('/')
                  console.log(values)
                }}
                validationSchema={validate}>
                {(formikProps) => {
                  const {handleSubmit} = formikProps
                  return(
                  <div className='field-top'>
                    <div className='name-top'>
                      <h1>Login</h1>
                      <h6>
                        New user? <span>Create an account</span>
                      </h6>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <TextBarLogin 
                        label='Email' 
                        name='email' 
                        type='text' 
                      />
                      <TextBarLogin
                        label='Passowrd'
                        name='password'
                        type='password'
                      />
                      <h6 className='forgot'>Forgot password?</h6>
                      <Box sx={{marginLeft: '88px', width:'700px', marginTop: '42px'}}>
                        <Button 
                          variant="contained"
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
                            Login
                          </Typography>
                        </Button>
                      </Box>
                    </form>
                  </div>
                )}}
              </Formik>
              <Divider
                sx={{
                  width: "700px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "136px",
                }}
              />
              <Auth />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Cover;
