import React from "react";
import "./Account.css";
import store from "../../Asset/store.svg";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  Button,
  Box,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import profilePict from "../../Asset/Ellipse 11-1.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, patchUpdate } from "../../store/actions/profile";
import UploadImage from "../Upload/UploadImage";

function Account() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state?.account?.userDetails);
  console.log("user details", userDetails);
  // const globalStore = JSON.parse(localStorage.getItem("persist:root"))
  // console.log(JSON.parse(globalStore.account), 'datauser')
  // const userData = JSON.parse(globalStore?.account)
  // const [update, setUpdate] = useState({
  //   userName: "",
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   address: "",
  //   id_location: "",
  //   image: null,
  // });

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const changeUpdate = (e) => {
  //   console.log(e)
  //   setUpdate({
  //     ...update,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const [initialValues, setInitialValues] = useState(userDetails.details)
  // console.log(initialValues, "initialValues")
  const handleDataChange = (event) => {
    console.log(event, "event");
    // setInitialValues(event.target.value);
  };

  return (
    <div className='account-section'>
      <div className='aside-section'>
        <div className='recipe-sec'>
          <Link to='/dashboard' style={{ textDecoration: "none" }}>
            <Button
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#828282",
                textTransform: "none",
                padding: 0,
                marginBottom: "17px",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                  color: "#333333",
                },
              }}>
              <h4>My Recipe</h4>
            </Button>
          </Link>
          <Link to='/dashboard/my-order' style={{ textDecoration: "none" }}>
            <Button
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#828282",
                textTransform: "none",
                padding: 0,
                marginBottom: "17px",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                  color: "#333333",
                },
              }}>
              <h4>My Order</h4>
            </Button>
          </Link>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333333",
              textTransform: "none",
              padding: 0,
              marginBottom: "17px",
            }}>
            My Account
          </Typography>
        </div>
        <div className='seller-sec'>
          <Button
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#587B67",
              textTransform: "none",
              padding: 0,
              marginBottom: "17px",
              "&:hover": {
                backgroundColor: "#ffffff",
                boxShadow: "none",
              },
            }}>
            <img src={store} alt='' />
            <h4>Seller Dashboard</h4>
          </Button>
        </div>
      </div>
      <div className='account-text'>
        {/* <div className='avatar-sec'>
          <img src={profilePict} alt='' />
        </div> */}
        <div className='text-field'>
          <Formik
            enableReinitialize
            initialValues={{
              userName: userDetails?.details?.userName,
              email: userDetails?.details?.email,
              firstName: userDetails?.details?.firstName,
              lastName: userDetails?.details?.lastName,
              phoneNumber: userDetails?.details?.phoneNumber,
              address: userDetails?.details?.address,
              id_location: userDetails?.details?.id_location,
              image: userDetails?.details?.image,
            }}
            onSubmit={(values) => {
              console.log(values, "bisa")
              let formData = new FormData();
              Object.entries(values)
                .filter(
                  ([key, value]) => value !== userDetails.details[`${key}`]
                )
                .forEach(([key, value]) => {
                  formData.append(key, value);
                });

              //       Object.entries(values).forEach((item)=> {
              //         formData.append(item[0], item[1])
              //       })
              dispatch(patchUpdate(formData));
              // navigate("/")
            }}>
            {(formikProps) => {
              const { values, handleChange, handleBlur, handleSubmit } =
                formikProps;
              console.log(values, "ini value");
              return (
                <form onSubmit={handleSubmit}>
                  <div className='avatar-sec'>
                    {/* <img src={initialValues?.image || null} alt='' /> */}
                    <UploadImage
                      className='avatar'
                      name='image'
                      value={values.image}
                    />
                  </div>
                  {/* <h1>ini formik</h1> */}
                  <div className='text-field-1'>
                    <div>
                      <h5>Username</h5>
                      <InputBase
                        sx={{
                          width: "346px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='userName'
                        value={values.userName}
                        // defaultValue={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h5>Email</h5>
                      <InputBase
                        sx={{
                          width: "346px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='text-field-2'>
                    <div>
                      <h5>First Name</h5>
                      <InputBase
                        sx={{
                          width: "346px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h5>Last Name</h5>
                      <InputBase
                        sx={{
                          width: "346px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='text-field-3'>
                    <div>
                      <h5>Location (City)</h5>
                      <InputBase
                        sx={{
                          width: "346px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='id_location'
                        value={
                          values.id_location == 1
                            ? "Jakarta"
                            : values.id_location == 2
                            ? "Bogor"
                            : values.id_location == 3
                            ? "Depok"
                            : "Tangerang"
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h5>Phone Number</h5>
                      <InputBase
                        sx={{
                          width: "346px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='phoneNumber'
                        value={values.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='text-field-4'>
                    <div>
                      <h5>Address</h5>
                      <InputBase
                        sx={{
                          width: "740px",
                          border: "1px solid #9F9F9F",
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          padding: "12px 16px",
                          fontFamily: "Nunito",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginRight: "47px",
                          marginTop: "6px",
                        }}
                        fullWidth
                        name='address'
                        multiline
                        rows={2}
                        value={values.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='btn-save'>
                    <Button
                      variant='contained'
                      type='submit'
                      sx={{
                        width: "167px",
                        height: "36px",
                        background: "#F9C959",
                        boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
                        borderRadius: "24px",
                        marginTop: "57px",
                        marginLeft: "80px",
                        textTransform: "none",
                      }}>
                      <Typography
                        component='div'
                        sx={{
                          fontFamily: "Nunito",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#333333",
                        }}>
                        Save Changes
                      </Typography>
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Account;
