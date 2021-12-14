import React from "react";
import "./Account.css";
import store from "../../Asset/store.svg";
import { Link } from "react-router-dom";
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
import { getUser } from "../../store/actions/profile";

function Account() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const userDetails = useSelector((state) => state.userDetails.userDetails);
  console.log("user details", userDetails);
  const [username, setUsername] = React.useState(userDetails.details.userName);
  const [email, setEmail] = React.useState(userDetails.details.email);
  const [firstName, setFirstname] = React.useState(userDetails.details.firstName);
  const [lastName, setLastname] = React.useState(userDetails.details.lastName);
  const [location, setLocation] = React.useState(userDetails.details.location.name);
  const [phoneNumber, setPhonenumber] = React.useState(userDetails.details.phoneNumber);
  const [address, setAddress] = React.useState(userDetails.details.address);
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastname = (event) => {
    setLastname(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handlePhonenumber = (event) => {
    setPhonenumber(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
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
          <Link to='/order' style={{ textDecoration: "none" }}>
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
        <div className='avatar-sec'>
          <img src={profilePict} alt='' />
        </div>
        <div className='text-field'>
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
                value={username}
                onChange={handleUsername}
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
                value={email}
                onChange={handleEmail}
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
                value={firstName}
                onChange={handleFirstname}
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
                value={lastName}
                onChange={handleLastname}
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
                value={location}
                onChange={handleLocation}
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
                value={phoneNumber}
                onChange={handlePhonenumber}
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
                multiline
                rows={2}
                value={address}
                onChange={handleAddress}
              />
            </div>
          </div>
        </div>
        <div className='btn-save'>
          <Button
            variant='contained'
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
      </div>
    </div>
  );
}

export default Account;
