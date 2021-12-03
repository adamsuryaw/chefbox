import React from 'react'
import './Register.css'
import bgCover from '../../Asset/Frame 4.svg'
import logo from '../../Asset/Group 2.svg'
import { Grid, Paper, Box, Button, Divider } from '@mui/material';      
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import TextBarRegis from '../TextBar/TextBarRegis';
import ButtonRegis from '../Button/ButtonRegis'
import * as Yup from 'yup';
import Auth from '../Auth/Auth';
import AuthRegis from '../Auth/AuthRegis';

function Register() {
    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 20 character or less')
            .required('Required'),
        email: Yup.string()
            .email("Email is Invalid")
            .required('Required')
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please Input Your Email"
            ),
        password: Yup.string("Please Enter Your Password")
            .required('Password must be required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Password Must be at least 8 Characters"
            ),
        confirmPassword: Yup.string()
            .required('Re-enter your password')
            .oneOf([Yup.ref("password"), null], "Password must match"),
    })
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="register-page">
            <div className="register-background">
                <img className="bg-image" src={bgCover} alt="background image" />
                <Grid container>
                    <Grid item xl={6}>
                        <img className="logo-image" src={logo} alt="logo image" />
                    </Grid>
                    <Grid item xl={6}>
                        <Box 
                            sx={{
                                backgroundColor: 'white',
                                width: '100%',
                                height: '911px',
                                borderRadius: '80px 0 0 80px',
                                marginTop: '60px',
                                boxShadow: '0px 4px 24px 4px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            <Formik
                                initialValues = {{
                                    username: '',
                                    email: '',
                                    passowrd: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={validate}
                            >
                                {formik => 
                                    <div className="field-top">
                                        <div className="name-top">
                                            <h1>Create Account</h1>
                                            <h6>Already have account? <span>Login</span></h6>
                                        </div>
                                        {console.log(formik)}
                                        <Form>
                                            <TextBarRegis label="Username" name="username" type="text" />
                                            <TextBarRegis label="Email" name="email" type="text" />
                                            <TextBarRegis label="Passowrd" name="password" type="password"/>
                                            <TextBarRegis label="Confirm Passowrd" name="confirmPassword" type="password"/>
                                            <ButtonRegis />
                                        </Form>
                                        
                                </div>
                                }
                            </Formik>
                            <Divider sx={{width: '700px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}} />
                            <AuthRegis />
                        </Box>
                        
                    </Grid>
                </Grid>
                
            </div>
        </div>
        
    )
}

export default Register
