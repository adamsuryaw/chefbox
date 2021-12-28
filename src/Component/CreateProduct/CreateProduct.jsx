import React from "react";
import "./CreateProduct.css";
import {
  Button,
  Box,
  // MenuItem,
  InputBase,
  // Paper,
  // TextField,
  Typography,
} from "@mui/material";
import check from "../../Asset/check.svg";
// import data from "../Data/data";
import { useNavigate } from "react-router-dom";
import { putCreateFour } from "../../store/actions/create";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useEffect } from "react";
import { getRecipe } from "../../store/actions/recipe";

const stylesSub = {
  width: "359px",
  border: "1px solid #9F9F9F",
  boxSizing: "border-box",
  borderRadius: "4px",
  padding: "12px 16px",
  fontFamily: "Nunito",
  fontWeight: "normal",
  fontSize: "14px",
}

function CreateProduct() {
  // const { tempat } = data;
  // const [location, setLocation] = React.useState();
  // const handleChangeLocation = (event) => {
  //   setLocation(event.target.value);
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {list} = useSelector((state) => state?.recipe?.listRecipe);
  // console.log(list.recipe, "stepFour")
  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);
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
            // width: "850px",
            height: "204px",
            background: "#FFFCF5",
            border: "1px solid #E0E0E0",
            boxSizing: "border-box",
            padding: "12px 0 0 15px",
          }}>
          <h4>Product contents</h4>
          <ul>
            <li>{list.recipe && list?.recipe[0] ? list?.recipe[0]?.ingredient : null}</li>
          </ul>
        </Box>
        <Formik
          initialValues={{
            price: '',
            stock: '',
            id_location: ''
          }}
          onSubmit={(values, {resetForm}) => {
            dispatch(putCreateFour(list?.recipe?.[0]?.id, values))
            navigate('/recipe')
            // window.location.reload();
            // console.log(values)
          }}
        >
          {(formikProps) => {
          const {values, handleChange, handleBlur, handleSubmit} = formikProps
          return (
            <form onSubmit={handleSubmit}>
              <div className='input-one'>
                <div className='input-price'>
                  <h6>Price</h6>
                  <InputBase
                    name="price"
                    value={values.price}
                    onChange={handleChange}
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
                    name="stock"
                    value={values.stock}
                    onChange={handleChange}
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
                <select
                  name="id_location"
                  value={values.id_location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={stylesSub}
                >
                  <option value="" label="Please Select Location" />
                  <option value="1" label="Jakarta" />
                  <option value="2" label="Bogor" />
                  <option value="3" label="Depok" />
                  <option value="4" label="Tangerang" />
                  <option value="5" label="Bekasi" />
                </select>
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
                {/* <Link to='/dashboard'> */}
                  <Button
                    variant='contained'
                    type="submit"
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
                {/* </Link> */}
              </div>
            </form>
          )}}
        </Formik>
        
      </div>
    </div>
  );
}

export default CreateProduct;
