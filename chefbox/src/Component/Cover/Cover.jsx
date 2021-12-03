import React from 'react'
import './Cover.css'
import bgCover from '../../Asset/Frame 4.svg'
import logo from '../../Asset/Group 2.svg'
import { Grid, Paper, Box, Button, Divider } from '@mui/material';      
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import TextBarLogin from '../TextBar/TextBarLogin'
import ButtonComp from '../Button/Button';
import * as Yup from 'yup';
import Auth from '../Auth/Auth';

function Cover() {
    const validate = Yup.object({
        email: Yup.string()
            .email("Email is Invalid")
            .required('Required')
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please Input Your Email"
            ),
    })
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="cover-page">
            <div className="cover-background">
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
                                    email: '',
                                    passowrd: ''
                                }}
                                validationSchema={validate}
                            >
                                {formik => 
                                    <div className="field-top">
                                        <div className="name-top">
                                            <h1>Login</h1>
                                            <h6>New user? <span>Create an account</span></h6>
                                        </div>
                                        {console.log(formik)}
                                        <Form>
                                            <TextBarLogin label="Email" name="email" type="text" />
                                            <TextBarLogin label="Passowrd" name="password" type="password"/>
                                            <h6 className="forgot">Forgot password?</h6>
                                            <ButtonComp />
                                        </Form>
                                        
                                </div>
                                }
                            </Formik>
                            <Divider sx={{width: '700px', marginLeft: 'auto', marginRight: 'auto', marginTop: '136px'}} />
                            <Auth />
                        </Box>
                        
                    </Grid>
                </Grid>
                
            </div>
        </div>
        
    )
}

export default Cover
