import React from "react";
import styles from "./Order.module.scss";
import MenuIMG from "../../components/assets/ChefBox/Order/Frame3.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecipe } from "../../store/actions/recipe";

// const { list } = useSelector((state) => state.recipe.listRecipe);
// console.log("list", list);

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getRecipe());
// }, []);
// {list?.map((data) => ())} this is the data that will be in the modal
const style = {
  display: "flex",
  justifyContent: "space-around",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fffaef",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const DeliveryDetails = (props) => {
  const { setForm } = props;
  return (
    <div className={styles.AddressUserName}>
      <h4>Justin Junaedi</h4>
      <div
        className={styles.AddressUserDetailsContainer}
        style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className={styles.AddressUserDetails}>
          <p style={{ marginTop: "0.5rem" }} className={styles.address}>
            Jl. Raya Jemursari No.258, Prapen, Kec. Tenggilis Mejoyo, Kota SBY,
            Jawa Timur 60237
          </p>
          <p style={{ marginTop: "0.3rem", marginBottom: "0.5rem" }}>
            +62 812 2345 2345
          </p>
        </div>
        <div className={styles.AddressUserDetailsButton}>
          <Stack className={styles.buttons} spacing={5} direction='row'>
            <Button
              onClick={() => setForm(true)}
              className={styles.button}
              variant='contained'
              sx={{
                width: "100%",
                background: "#fff",
                color: "black",
                borderRadius: "50px",
                margin: "0 3.5rem",
                padding: "5px 5rem",
                fontFamily: "Nunito Sans",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}>
              Edit Address
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export const DeliveryForm = (props) => {
  const {setForm} = props;
  return (
    <div className={styles.BoxedTextField}>
      <div className={styles.InputField}>
        <Box
          component='form'
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
            display: "flex",
          }}
          noValidate
          autoComplete='off'>
          <div>
            <div className={styles.firstName}>
              <h4>First Name</h4>
              <div className='TextFieldss'>
                <TextField
                  // required
                  id='outlined-required'
                  // label='First Name'
                  defaultValue=''
                />
              </div>
            </div>
            <div className={styles.lastName}>
              <h4>Last Name</h4>
              <div className='TextFieldss'>
                <TextField
                  // disabled
                  id='outlined-disabled'
                  // label='Last Name'
                  defaultValue=''
                />
              </div>
            </div>
            <div className={styles.phoneNumber}>
              <h4>Phone Number</h4>
              <div className='TextFieldss'>
                <TextField
                  id='outlined-number'
                  // label='Phone Number'
                  type='number'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className={styles.AddressField}>
              <h4>Address</h4>
              <div className='TextFieldss'>
                <TextField
                  id='outlined-number'
                  // label='Phone Number'
                  // type='number'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
          </div>
        </Box>
      </div>

      <Stack className={styles.buttons} spacing={5} direction='row'>
        <Button
          onClick={() => setForm(false)}
          className={styles.button}
          variant='contained'
          sx={{
            width: "20%",
            background: "#fff",
            color: "black",
            borderRadius: "50px",
            margin: "0 3.5rem",
            padding: "5px 5rem",
            fontFamily: "Nunito Sans",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}>
          Save Changes
        </Button>
      </Stack>
    </div>
  );
};

export default function Order() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showform, setForm] = React.useState(false);

  return (
    <div className={styles.Body}>
      <div className={styles.SecondBody}>
        <div className={styles.ThirdBody}>
          <div
            style={{
              borderBottom: "3px groove",
              margin: "0rem 0rem 1.5rem 0rem",
              padding: "1rem 0rem 0.7rem 2rem",
            }}
            className={styles.OrderContainer}>
            <h1>Checkout</h1>
          </div>
          <div className={styles.ContainerUserInput}>
            <div className={styles.OrderUserAddress}>
              <div className={styles.AddressUser}>
                <h3>Delivery Address</h3>
                {showform ? (
                  <DeliveryForm setForm={setForm} />
                ) : (
                  <DeliveryDetails setForm={setForm} />
                )}
              </div>
            </div>
            <div className={styles.ProductDetails}>
              <h3 style={{ color: "#828282" }}>Product Details</h3>
              <div className={styles.ProductDetailsMenus}>
                <div className={styles.MenuList}>
                  <h5
                    style={{ color: "#828282", margin: "0.5rem 0 1rem 1rem" }}>
                    Menu
                  </h5>
                  <h5
                    style={{
                      color: "#828282",
                      margin: "0.5rem 0rem 1rem 26rem",
                    }}>
                    Amount
                  </h5>
                  <h5
                    style={{
                      color: "#828282",
                      margin: "0.5rem 7rem 1rem 0rem",
                    }}>
                    Price
                  </h5>
                </div>
                <div className={styles.ProductContainer}>
                  {" "}
                  {/* This is Modal */}
                  <img src={MenuIMG} alt='' onClick={handleOpen} />
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <Box sx={style}>
                      <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        <div className={styles.ProductContent}>
                          <h4>Product content</h4>
                          <div className={styles.ProductList}>
                            <ul>
                              <li style={{ listStyleType: "disc" }}>
                                1 kg package egg noodles
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                50 gr butter
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                50 gr minced parsley
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                50 gr salt
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                10 gr black pepper
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                100 ml olive oil
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}></Typography>
                    </Box>
                  </Modal>
                  <h4 style={{ marginLeft: "-15rem", marginRight: "6rem" }}>
                    Healthy Fruit Oatmeal
                  </h4>
                  <h4>1</h4>
                  <h4 style={{ position: "relative", right: "5.6rem" }}>
                    Rp.35.000
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={styles.PaymentContent}
              style={{ margin: "10rem 3rem 0 3rem" }}>
              <div
                style={{ borderTop: "3px groove" }}
                className={styles.PaymentContentDetails}>
                <div
                  className={styles.TotalContainer}
                  style={{
                    margin: "2rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <ul
                    className={styles.Subtotal}
                    style={{
                      marginRight: "5rem",
                      marginTop: "1rem",
                      listStyle: "none",
                      textAlign: "right",
                    }}>
                    <li style={{ marginBottom: "1rem" }}>Subtotal</li>
                    <li style={{ marginBottom: "1rem" }}>Delivery Fee</li>
                    <li style={{ color: "#B6340B", marginBottom: "1rem" }}>
                      Total
                    </li>
                  </ul>
                  <ul
                    className={styles.Nominal}
                    style={{
                      marginRight: "1rem",
                      marginTop: "1rem",
                      listStyle: "none",
                    }}>
                    <li style={{ marginBottom: "1rem" }}>Rp.35.000</li>
                    <li style={{ marginBottom: "1rem" }}>Rp.15.000</li>
                    <li style={{ color: "#B6340B", marginBottom: "1rem" }}>
                      Rp.50.000
                    </li>
                  </ul>
                </div>
              </div>
              <Stack
                className={styles.buttons}
                spacing={2}
                direction='row'
                style={{
                  marginLeft: "41.5rem",
                  paddingTop: "1rem",
                  paddingBottom: "2rem",
                }}>
                <Link to='/order/payment'>
                  <Button
                    className={styles.button}
                    variant='contained'
                    sx={{
                      background: "#B6340B",
                      borderRadius: "50px",
                      padding: "6px 30px",
                      fontFamily: "Nunito Sans",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}>
                    Choose Payment Method
                  </Button>
                </Link>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
