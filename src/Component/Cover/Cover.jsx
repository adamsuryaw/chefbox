import React from "react";
import "./Cover.css";
import { useDispatch } from "react-redux";
import bgCover from "../../Asset/Frame 4.svg";
import logo from "../../Asset/Group 2.svg";
import { Grid, Box, Button, Divider, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Formik } from "formik";
import TextBarLogin from "../TextBar/TextBarLogin";
// import ButtonComp from "../Button/Button";
import * as Yup from "yup";
import Auth from "../Auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../../store/actions/auth";
import useMediaQuery from "@mui/material/useMediaQuery";

function Cover() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is Invalid")
      .required("Required")
      //eslint-disable-next-line
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Input Your Email"),
  });
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  function SimpleMediaQuery() {
    const matches = useMediaQuery("(max-width:1280px)");
    return matches;
  }

  const dividerStyle1 = {
    width: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "136px",
  };

  const dividerStyle2 = {
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
  };

  return (
    <div className='cover-page'>
      <div className='cover-background'>
        <img className='bg-image' src={bgCover} alt='background' />
        <Grid container>
          <Grid item md={4} lg={1} xl={6}>
            <Link to='/'>
              <img className='logo-image' src={logo} alt='logo' />
            </Link>
          </Grid>
          <Grid item md={8} lg={11} xl={6}>
            <Box className='box-login'>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  dispatch(LoginAction(values));
                  navigate("/");
                  // console.log(values)
                }}
                validationSchema={validate}>
                {(formikProps) => {
                  const { handleSubmit } = formikProps;
                  return (
                    <div className='field-top'>
                      <div className='name-top'>
                        <h1>Login</h1>
                        <h6>
                          New user?{" "}
                          <Link to='/register'>
                            <span className='span-login'>
                              Create an account
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <TextBarLogin label='Email' name='email' type='text' />
                        <TextBarLogin
                          label='Passowrd'
                          name='password'
                          type='password'
                        />
                        <h6 className='forgot'>Forgot password?</h6>
                        <Box className='btn-login'>
                          <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            sx={{
                              height: "45px",
                              borderRadius: "24px",
                              background:
                                "linear-gradient(45deg, #B6340B 30%, #B6340B 90%)",
                              boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
                            }}>
                            <Typography
                              sx={{
                                fontFamily: "Nunito",
                                fontWeight: "bold",
                                fontSize: "16px",
                              }}>
                              Login
                            </Typography>
                          </Button>
                        </Box>
                      </form>
                    </div>
                  );
                }}
              </Formik>
              <div className='divider-style'>
                <Divider
                  sx={SimpleMediaQuery ? dividerStyle2 : dividerStyle1}
                />
              </div>
              <Auth />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Cover;
