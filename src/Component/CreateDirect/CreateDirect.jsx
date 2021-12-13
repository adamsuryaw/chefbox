import React from "react";
import "./CreateDirect.css";
import {
  Button,
  Box,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import check from "../../Asset/check.svg";
import { Link } from "react-router-dom";

function CreateDirect() {
  return (
    <div className='direct-section'>
      <div className='direct-desc'>
        <div className='direct-text'>
          <Button
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#000000",
              textTransform: "none",
              padding: 0,
              marginBottom: "17px",
              "&:hover": {
                backgroundColor: "#ffffff",
                boxShadow: "none",
              },
            }}>
            <h4>Recipe Description</h4>
            <img src={check} alt='' />
          </Button>
          <Button
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#000000",
              textTransform: "none",
              padding: 0,
              marginBottom: "17px",
              paddingRight: "20px",
              "&:hover": {
                backgroundColor: "#ffffff",
                boxShadow: "none",
              },
            }}>
            <h4>Ingredients</h4>
            <img src={check} alt='' />
          </Button>
          <Button
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#000000",
              textTransform: "none",
              padding: 0,
              marginBottom: "17px",
              "&:hover": {
                backgroundColor: "#ffffff",
                boxShadow: "none",
              },
            }}>
            <h4>Directions</h4>
          </Button>
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
                color: "#000000",
              },
            }}>
            <h4>Product Details</h4>
          </Button>
        </div>
      </div>
      <div className='input-direct'>
        <div className='item-list'>
          <div className='list'>
            <h4>1</h4>
            <div className='amount-direct'>
              <h5>Directions</h5>
              <InputBase
                placeholder='e.g. Add all ingredients and blend well.'
                multiline
                rows={4}
                sx={{
                  width: "716px",
                  border: "1px solid #9F9F9F",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                  padding: "12px 16px",
                  fontFamily: "Nunito",
                  fontWeight: "normal",
                  fontSize: "14px",
                  marginRight: "30px",
                }}
              />
            </div>
          </div>
          <Button
            variant='contained'
            sx={{
              width: "145px",
              height: "45px",
              background: "#ffffff",
              border: "1px solid #E0E0E0",
              boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
              borderRadius: "24px",
              marginTop: "32px",
              marginLeft: "625px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffffff",
                boxShadow: "none",
              },
            }}>
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333333",
              }}>
              Add New
            </Typography>
          </Button>
        </div>
        <Link to='/create/product'>
          <Button
            variant='contained'
            sx={{
              width: "125px",
              height: "45px",
              background: "#F9C959",
              boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
              borderRadius: "24px",
              left: "650px",
              top: "250px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#F9C959",
                boxShadow: "none",
              },
            }}>
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333333",
              }}>
              Next
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateDirect;
