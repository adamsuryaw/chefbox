import React from 'react';
import './TextBarRegis.css'
import { TextField, Grid, Box } from '@mui/material';
import { useField } from 'formik';
// import { styled } from '@mui/material/styles';

function TextBarRegis({label,...props}) {
    const [field, meta] = useField(props)
    // console.log(label)
    // console.log(field, meta)
    // console.log(meta)
    // console.log(props)
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
                    <Box className="text-regis">
                        <div className="labelRegis">
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

export default TextBarRegis
