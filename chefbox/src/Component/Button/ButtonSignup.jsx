import React from 'react'
import { Button, Grid, Paper, Box, Typography } from '@mui/material';
import { useField } from 'formik';
import { styled } from '@mui/material/styles';

function ButtonSignup() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Grid container>
                <Grid xl={12}>
                    <Box sx={{marginLeft: '88px', width:'700px', marginTop: '30px'}}>
                        <Button 
                            variant="contained"
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
                                    Complete Profile
                                </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default ButtonSignup
