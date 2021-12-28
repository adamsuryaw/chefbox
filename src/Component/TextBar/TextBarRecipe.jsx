import React from 'react'
import { TextField, Box, MenuItem } from '@mui/material';
// import { useField } from 'formik';
// import { styled } from '@mui/material/styles';
import './TextBarRecipe.css';
import data from '../Data/data';

function TextBarRecipe(props) {
    const {tempat, tipe, kategori, sorting} = data;
    // console.log(data)
    // console.log(props)
    const [location, setLocation] = React.useState();
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };
    const [type, setType] = React.useState();
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const [category, setCategory] = React.useState();
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const [sort, setSort] = React.useState('Newest');
    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    const model = props.name

    return (
        <div>
            <Box sx={{
                width: '250px'
            }}>
                {model === "location" ?
                    <TextField 
                    sx={{display: 'block', fontSize: '14px', marginTop: '8.21px', padding: '0px'}}
                    type={props.type}
                    {...props}
                    fullWidth
                    select
                    label={props.placeholder}
                    value={location}
                    onChange={handleChangeLocation}
                    variant="outlined"
                    >
                        {tempat.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    :
                    model === "type" ?
                    <TextField 
                        sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                        type={props.type}
                        {...props}
                        fullWidth
                        label={props.placeholder}
                        select
                        value={type}
                        onChange={handleChangeType}
                        variant="outlined"
                        >
                            {tipe.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                    :
                    model === "category" ?
                    <TextField 
                        sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                        type={props.type}
                        {...props}
                        fullWidth
                        label={props.placeholder}
                        select
                        value={category}
                        onChange={handleChangeCategory}
                        variant="outlined"
                        >
                            {kategori.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                    :
                    <TextField 
                        sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                        type={props.type}
                        {...props}
                        fullWidth
                        select
                        value={sort}
                        onChange={handleChangeSort}
                        variant="outlined"
                        >
                            {sorting.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                }
            </Box>
        </div>
    )
}

export default TextBarRecipe
