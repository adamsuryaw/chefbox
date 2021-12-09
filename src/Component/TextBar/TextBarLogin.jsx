import React from 'react';
import './TextBarLogin.css'
import { TextField, Grid, Paper, Box } from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import { styled } from '@mui/material/styles';

function TextBarLogin({label,...props}) {
    const [field, meta] = useField(props)
    console.log(field, meta)
    console.log(props)
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
                    <Box sx={{marginLeft: '88px', width:'700px'}}>
                        <div className="labelLogin">
                            <label htmlFor={field.name}>{label}</label>
                        </div>
                        <TextField 
                            sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                            type={props.type}
                            {...field}
                            {...props}
                            fullWidth
                            variant="outlined"
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error}
                        />
                        
                    </Box>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default TextBarLogin
