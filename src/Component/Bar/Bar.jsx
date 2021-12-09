import React from 'react'
import './Bar.css'
import TextField from '@mui/material/TextField';

function Bar() {

    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className="bar-page">
            <div className="field-top">
                <h1>Login</h1>
                <h6>New user? <span>Create an account</span></h6>
            </div>
            <div className="field-text">
                <h6>Email</h6>
                <TextField
                    id="outlined-adornment-email"
                    value={values.email}
                    onChange={handleChange('email')}
                />
                <h6>Password</h6>
                <TextField
                    id="outlined-adornment-password"
                    value={values.password}
                    onChange={handleChange('password')}
                />
                <h6>Forgot password</h6>
            </div>
        </div>
    )
}

export default Bar
