import React from 'react'
import data from '../Data/data';
import { TextField, Box, MenuItem, InputBase, Select } from '@mui/material';
import './TextBarCreate.css'

function TextBarCreate(props) {
    const {tipe, kategori} = data;
    console.log(tipe)
    const [type, setType] = React.useState();
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const [category, setCategory] = React.useState();
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const model = props.name

    return (
        <div>
            <Box sx={{
                width: '346px'
            }}>
                {model == "type" ?
                    <TextField 
                        sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                        type={props.type}
                        {...props}
                        fullWidth
                        value={type}
                        onChange={handleChangeType}
                        variant="outlined"
                        >
                            {tipe.map((option) => (
                                <MenuItem key={option.value} value={option.value} sx={{fontSize: '14px'}}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                    :
                    model == "category" ?
                    <TextField 
                        sx={{display: 'block', fontSize: '14px', marginTop: '8.21px'}}
                        type={props.type}
                        {...props}
                        fullWidth
                        value={category}
                        onChange={handleChangeCategory}
                        variant="outlined"
                        >
                            {kategori.map((option) => (
                                <MenuItem key={option.value} value={option.value} sx={{fontSize: '14px'}}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                    :
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder={props.placeholder}
                    />
                }
            </Box>
        </div>
    )
}

export default TextBarCreate
