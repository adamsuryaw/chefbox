import React from "react";
import "./CreateIngred.css";
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
import { putCreateTwo } from "../../store/actions/create";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";

function CreateIngred() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stepTwo = useSelector((state) => state.create.createRecipe)
  console.log(stepTwo, "stepTwo")
  // const [amount, setAmount] = React.useState('')
  // const [unit, setUnit] = React.useState('')
  // const [label, setLabel] = React.useState('')
  const [value, setValue] = React.useState({
    amount: '',
    unit: '',
    label: '',
  })

  const initialValues = {
    addRecipe: [
      {
        amount: '',
        unit: '',
        label: '',
      },
    ],
  };
  // const handleSubmit = () => {
  //   dispatch(putCreateTwo(id))
  // }
  return (
    <div className='ingred-section'>
      <div className='ingred-desc'>
        <div className='ingred-text'>
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
      <div className='input-ingred'>
        <Formik
          initialValues={{
            addRecipe:[
              {
                name: '',
                email: '',
              },
            ]
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
        {(formikProps) => {
          const {values, handleChange, handleBlur, handleSubmit} = formikProps
          return (
            <form>
            <div className='item-list'>
              <div className='list'>
                <h4>1</h4>
                <div className='amount-ingred'>
                  <h5>Amount</h5>
                  <InputBase
                    placeholder='e.g. 1'
                    name="amount"
                    value={values.initialValues.addRecipe.amount}
                    onChange={handleChange}
                    sx={{
                      width: "83px",
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
                <div className='unit-ingred'>
                  <h5>Unit</h5>
                  <InputBase
                    name="unit"
                    value={value.unit}
                    onChange={handleChange}
                    placeholder='e.g. 1'
                    sx={{
                      width: "213px",
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
                <div className='label-ingred'>
                  <h5>Label</h5>
                  <InputBase
                    name="label"
                    value={value.label}
                    onChange={handleChange}
                    placeholder='e.g. Flour'
                    sx={{
                      width: "367px",
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
            {/* <Link to='/create/direct'> */}
              <Button
                type="submit"
                onClick={handleSubmit}
                variant='contained'
                sx={{
                  width: "125px",
                  height: "45px",
                  background: "#F9C959",
                  boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
                  borderRadius: "24px",
                  left: "660px",
                  top: "300px",
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
            {/* </Link> */}
          </form>
          )
          
        }}
        
        </Formik>
        
      </div>
    </div>
  );
}

export default CreateIngred;
