import React from "react";
import { useDispatch } from 'react-redux';
import "./Signup.css";
import bgCover from "../../Asset/Frame 4.svg";
import logo from "../../Asset/Group 2.svg";
import { Grid, Box, Button, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Formik } from "formik";
// import ButtonRegis from "../Button/ButtonRegis";
import * as Yup from "yup";
// import Auth from "../Auth/Auth";
// import AuthRegis from "../Auth/AuthRegis";
import TextBarSignup from "../TextBar/TextBarSignup";
// import UploadImage from "../Upload/UploadImage";
// import ButtonSignup from "../Button/ButtonSignup";
import { Link, useNavigate } from "react-router-dom";
import { SignupAction } from "../../store/actions/auth";
import UploadSignup from "../Upload/UploadSignup";
import Swal from "sweetalert2"

const selectStyle = {
  padding: '12px 16px',
  border: '1px solid #9F9F9F',
  boxSizing: 'border-box',
  borderRadius: '4px',
  width: '100%',
}

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/, "Wrong Phone Number"),
    address: Yup.string()
  });
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  

  return (
    <div className='signup-page'>
      <div className='signup-background'>
        <img className='bg-image' src={bgCover} alt='background' />
        <Grid container>
          <Grid item lg={4} xl={6}>
            <Link to='/'>
              <img className='logo-image' src={logo} alt='logo' />
            </Link>
          </Grid>
          <Grid item lg={8} xl={6}>
            <Box className="box-signup">
              <Formik
                initialValues={{
                  image: "",
                  phoneNumber: "",
                  address: "",
                  id_location: ""
                }}
                onSubmit={(values) => {
                  let formData = new FormData();

                  Object.entries(values).forEach((item)=> {
                    formData.append(item[0], item[1])
                  })

                  dispatch(SignupAction(formData));
                  navigate("/")
                  
                  
                  
                  // console.log(values)
                }}
                validationSchema={validate}>
                {(formikProps) => {
                const {values, handleChange, handleBlur, handleSubmit} = formikProps
                console.log(values.image.size)
                return (
                  <div className='field-top'>
                    <div className='name-top'>
                      <h1>One more step!</h1>
                      <h6>Help us know you better</h6>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <UploadSignup name="image" value={values.image} valueFromApi={values.image} />
                      <TextBarSignup
                        label='Phone Number'
                        placeholder='ex. 08'
                        name='phoneNumber'
                        type='text'
                      />
                      <TextBarSignup
                        label='Address'
                        placeholder='Jln...'
                        name='address'
                        type='text'
                      />
                      <div className='select-bar'>
                        <div className="labelLoc">
                              <label htmlFor="id_location">Location</label>
                          </div>
                        <select
                          name="id_location"
                          value={values.id_location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={selectStyle}
                        >
                          <option value="" label="Select a Location" />
                          <option value="1" label="Jakarta" />
                          <option value="2" label="Bogor" />
                          <option value="3" label="Depok" />
                          <option value="4" label="Tangerang" />
                          <option value="5" label="Bekasi" />
                        </select>
                      </div>
                      
                      {/* <Link to='/'> */}
                        <Box className="box-btn-sign">
                          <Button 
                            variant="contained"
                            type="submit"
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
                      {/* </Link> */}
                    </form>
                  </div>
                )}}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
