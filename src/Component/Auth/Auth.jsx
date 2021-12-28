import React from 'react'
import { Button, Grid, Box, Typography } from '@mui/material';
// import { useField } from 'formik';
// import { styled } from '@mui/material/styles';
import './Auth.css'
import google from '../../Asset/google.svg'
import facebook from '../../Asset/facebook.svg'

function Auth() {

    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    return (
        <div>
            <Grid container>
                <Grid xl={12}>
                    <Box className="box-auth">
                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{
                                height: '45px',
                                borderRadius: '24px',
                                background: 'linear-gradient(45deg, #fff 30%, #fff 90%)',
                                marginBottom: '22px',
                                boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)'
                            }}
                            >
                                <img src={google} alt="logo" style={{width: '25px', marginRight: '3px'}} />
                                <Typography
                                    sx={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        color: 'black'
                                    }}
                                >
                                    Continue with Google
                                </Typography>
                        </Button>
                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{
                                height: '45px',
                                borderRadius: '24px',
                                background: 'linear-gradient(45deg, #4E67A5 30%, #4E67A5 90%)',
                                boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)'
                            }}
                            >
                                <img src={facebook} alt="logo" style={{width: '20px', marginRight: '6px'}} />
                                <Typography
                                    sx={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                    }}
                                >
                                    Continue with Facebook
                                </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Auth
