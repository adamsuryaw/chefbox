import React, { useState, useEffect } from 'react'
import './TextBarRegis.css'
import { TextField, Grid, Paper, Box, MenuItem } from '@mui/material';
import { useField } from 'formik';
import { styled } from '@mui/material/styles';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getLocation } from '../../store/actions/location'

const currencies = [
    {
        value: 'Surabaya',
        label: 'Surabaya',
    },
    {
        value: 'Jakarta',
        label: 'Jakarta',
    },
    {
        value: 'Yogyakarta',
        label: 'Yogyakarta',
    },
    {
        value: 'Balikpapan',
        label: 'Balikpapan',
    },
];

function TextBarSignup({label,...props}) {
    const [field, meta] = useField(props)
    console.log(field)
    console.log(props)
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    // const lokasi = useSelector((state) => state.location.listLocation);
    const dispatch = useDispatch()
    const currentToken = localStorage.getItem("token")

    useEffect(() => {
        dispatch(getLocation())
    }, [])

    return (
        <div>
            <Grid container>
                <Grid xl={12}>
                    <Box sx={{marginLeft: '88px', width:'700px'}}>
                        <div className="labelRegis">
                            <label htmlFor={field.name}>{label}</label>
                        </div>
                        {props.select === undefined ?
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
                        :
                        <TextField 
                            sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                            type={props.type}
                            {...field}
                            {...props}
                            fullWidth
                            select
                            value="lokasi"
                            onChange={handleChange}
                            variant="outlined"
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        }
                    </Box>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default TextBarSignup
