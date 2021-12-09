import React from "react";
import "./CreateDesc.css";
import {
  Button,
  Box,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import imageLogo from "../../Asset/XMLID 306.svg";
import data from "../Data/data";
import TextBarCreate from "../TextBar/TextBarCreate";
import { Link } from "react-router-dom";

function CreateDesc() {
  return (
    <div className='desc-section'>
      <div className='recipe-desc'>
        <div className='recipe-text'>
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
          </Button>
          <Link to='/create/ingredient' sx={{textDecoration: "none"}}>
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
              <h4>Ingredients</h4>
            </Button>
          </Link>

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
      <div className='input-desc'>
        <Box
          sx={{
            width: "518px",
            height: "260px",
            background: "linear-gradient(0deg, #F5F5F5, #F5F5F5)",
            boxShadow: "0px 4px 24px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            margin: "38px 168px 40px 168px",
          }}>
          <img src={imageLogo} alt='logo image' />
          <h6>Upload Profile Photo</h6>
        </Box>
        <div className='input-text'>
          <h6>Title</h6>
          <InputBase
            placeholder='e.g. Healthy Berry Pancake'
            sx={{
              width: "716px",
              border: "1px solid #9F9F9F",
              boxSizing: "border-box",
              borderRadius: "4px",
              padding: "12px 16px",
              fontFamily: "Nunito",
              fontWeight: "normal",
              fontSize: "14px",
            }}
          />
          <div className='input-select'>
            <div className='input-leftSelect'>
              <h6>Type</h6>
              <TextBarCreate
                name='type'
                select='true'
                type='text'
                placeholder='Choose your type'
              />
            </div>
            <div className='input-rightSelect'>
              <h6>Category</h6>
              <TextBarCreate
                name='category'
                select='true'
                type='text'
                placeholder='Choose your type'
              />
            </div>
          </div>
          <div className='input-info'>
            <div className='input-leftInfo'>
              <h6>Cooking Time</h6>
              <InputBase
                placeholder='e.g. 30 minutes'
                sx={{
                  width: "346px",
                  border: "1px solid #9F9F9F",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                  padding: "12px 16px",
                  fontFamily: "Nunito",
                  fontWeight: "normal",
                  fontSize: "14px",
                }}
              />
            </div>
            <div className='input-rightInfo'>
              <h6>Servings</h6>
              <InputBase
                placeholder='e.g. 5'
                sx={{
                  width: "346px",
                  border: "1px solid #9F9F9F",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                  padding: "12px 16px",
                  fontFamily: "Nunito",
                  fontWeight: "normal",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className='input-description'>
            <h6>Description</h6>
            <InputBase
              sx={{
                width: "716px",
                border: "1px solid #9F9F9F",
                boxSizing: "border-box",
                borderRadius: "4px",
                padding: "12px 16px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "20px",
              }}
              id='outlined-multiline-static'
              multiline
              rows={4}
              fullWidth
              placeholder='e.g. This gluten-free baked oatmeal dotted with blueberries and raspberries is an easy and heathy brunch casserole. Reheat leftovers for a quick breakfast all weeklong.'
            />
          </div>
          <div className='btn-next'>
            <Button
              variant='contained'
              sx={{
                width: "125px",
                height: "45px",
                background: "#F9C959",
                boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
                borderRadius: "24px",
                marginTop: "57px",
                marginLeft: "590px",
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
                Next
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDesc;
