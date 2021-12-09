import React from "react";
import "./CreateProduct.css";
import {
  Button,
  Box,
  MenuItem,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import check from "../../Asset/check.svg";
import data from "../Data/data";

function CreateProduct() {
  const { tempat } = data;
  const [location, setLocation] = React.useState();
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className='product-section'>
      <div className='product-desc'>
        <div className='product-text'>
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
          <Link to='/create/direct'>
            {" "}
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
              <img src={check} alt='' />
            </Button>
          </Link>

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
            <h4>Product Details</h4>
          </Button>
        </div>
      </div>
      <div className='input-product'>
        <Box
          sx={{
            width: "850px",
            height: "204px",
            background: "#FFFCF5",
            border: "1px solid #E0E0E0",
            boxSizing: "border-box",
            padding: "12px 0 0 15px",
          }}>
          <h4>Product contents</h4>
          <ul>
            <li>1 kg package egg noodles</li>
            <li>50 gr butter</li>
            <li>50 gr minced parsley</li>
            <li>50 gr salt</li>
            <li>10 gr black pepper</li>
            <li>100 ml olive oil</li>
          </ul>
        </Box>
        <div className='input-one'>
          <div className='input-price'>
            <h6>Price</h6>
            <InputBase
              sx={{
                width: "359px",
                border: "1px solid #9F9F9F",
                boxSizing: "border-box",
                borderRadius: "4px",
                padding: "12px 16px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "20px",
                marginRight: "47px",
              }}
              fullWidth
              placeholder='e.g. 120000'
            />
          </div>
          <div className='input-stock'>
            <h6>Stock</h6>
            <InputBase
              sx={{
                width: "359px",
                border: "1px solid #9F9F9F",
                boxSizing: "border-box",
                borderRadius: "4px",
                padding: "12px 16px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "20px",
              }}
              fullWidth
              placeholder='e.g. 25'
            />
          </div>
        </div>
        <div className='input-loc'>
          <h6>Location</h6>
          <TextField
            sx={{ display: "block", fontSize: "14px", marginTop: "8.21px" }}
            type='text'
            select
            fullWidth
            value={location}
            onChange={handleChangeLocation}
            variant='outlined'>
            {tempat.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{ fontSize: "14px" }}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className='btn-save'>
          <Button
            variant='text'
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "14px",
              color: "#333333",
              textTransform: "none",
            }}>
            Save as draft
          </Button>
          <Button
            variant='contained'
            sx={{
              width: "125px",
              height: "45px",
              background: "#F9C959",
              boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
              borderRadius: "24px",
              textTransform: "none",
              marginLeft: "36px",
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
              Publish
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
