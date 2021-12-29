import React from "react";
import styles from "./Order.module.scss";
// import MenuIMG from "../../components/assets/ChefBox/Order/Frame3.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewCart } from "../../store/actions/cart";
import { getOrder, patchOrder } from "../../store/actions/order";
// import { getRecipe } from "../../store/actions/recipe";
// import { patchUpdate } from "../../store/actions/profile";
// import { order } from "../../store/reducers/order";

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

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export const DeliveryDetails = (props) => {
  const { setForm } = props;
  const detailDelivery = useSelector(
    (state) => state?.order?.orderDetails
  );
  console.log("detailDelivery", detailDelivery);

  return (
    <div className={styles.AddressUserName}>
      <div className={styles.userName}>
        <h4 /*name='firstName' */ className={styles.firstName}>
          {detailDelivery?.orderList?.detailDelivery?.length ? detailDelivery?.orderList.detailDelivery[0]?.firstName : null}
        </h4>
        <h4 name='lastName' className={styles.lastName}>
          {detailDelivery?.orderList?.detailDelivery?.length ? detailDelivery?.orderList.detailDelivery[0]?.lastName : null}
        </h4>
      </div>
      <div
        className={styles.AddressUserDetailsContainer}
        style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className={styles.AddressUserDetails}>
          <p
            style={{ marginTop: "0.5rem" }}
            className={styles.address}
            name='address'>
            {detailDelivery?.orderList?.detailDelivery?.length ? detailDelivery?.orderList.detailDelivery[0]?.address : null}
          </p>
          <p
            style={{ marginTop: "0.3rem", marginBottom: "0.5rem" }}
            name='phoneNumber'>
            {detailDelivery?.orderList?.detailDelivery?.length ? detailDelivery?.orderList?.detailDelivery[0]?.phoneNumber : null}
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
                "&:hover": {
                  background: "#F9C959",
                  color: "#fff",
                },
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
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    // id: [],
    lastName: "",
    phoneNumber: "",
    firstName: "",
    address: "",
  });
  console.log("inputs", inputs);

  const changeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // const submitChanges = (e) => [];
  const { setForm } = props;
  console.log("setForm", setForm);

  const detailDelivery = useSelector(
    (state) => state?.order?.orderDetails
  );
  console.log("detailDelivery", detailDelivery);

  return (
    <div className={styles.BoxedTextField}>
      <div className={styles.InputField}>
        <Box
          component='form'
          sx={{
            "& .MuiTextField-root": { m: 1, width: "27ch" },
            display: "flex",
            justifyContent: "flex-start",
          }}
          noValidate
          autoComplete='off'>
          <Grid container spacing={-15}>
            <Grid item xs={6} md={4}>
              <div className={styles.firstName}>
                <h4>{detailDelivery?.orderList?.detailDelivery?.firstName}</h4>
                <div className='TextFieldss'>
                  <TextField
                    // required
                    id='outlined-required'
                    label='First Name'
                    defaultValue=''
                    onChange={(e) => changeInput(e)}
                    name='firstName'
                  />
                </div>
              </div>
              {/* <Item>xs=6 md=8</Item> */}
            </Grid>
            <Grid item xs={6} md={4}>
              <div className={styles.lastName}>
                <h4>{detailDelivery?.orderList?.detailDelivery?.lastName}</h4>
                <div className='TextFieldss'>
                  <TextField
                    // disabled
                    id='outlined-disabled'
                    label='Last Name'
                    defaultValue=''
                    onChange={(e) => changeInput(e)}
                    name='lastName'
                  />
                </div>
              </div>
              {/* <Item>xs=6 md=4</Item> */}
            </Grid>
            <Grid item xs={6} md={4}>
              <div className={styles.phoneNumber}>
                <h4>{detailDelivery?.orderList?.detailDelivery?.phoneNumber}</h4>
                <div className='TextFieldss'>
                  <TextField
                    id='outlined-disabled'
                    label='Phone Number'
                    // type='number'
                    onChange={(e) => changeInput(e)}
                    name='phoneNumber'
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                </div>
              </div>
              {/* <Item>xs=6 md=4</Item> */}
            </Grid>
            <Grid item xs={1} md={1}>
              <div className={styles.AddressField}>
                <h4>{detailDelivery?.orderList?.detailDelivery?.address}</h4>
                <div className='TextFieldss'>
                  <TextField
                    id='outlined-disabled'
                    onChange={(e) => changeInput(e)}
                    name='address'
                    label='Address'
                    // type='number'
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                </div>
              </div>
              {/* <Item>xs=6 md=8</Item> */}
            </Grid>
          </Grid>
          <div></div>
        </Box>
      </div>
      <Stack className={styles.buttons} spacing={5} direction='row'>
        <Button
          onClick={() => {
            setForm(false);
            dispatch(patchOrder(inputs, detailDelivery?.orderList?.detailDelivery[0]?.id));
            // window.location.reload();
          }}
          // onChange={(e) => submitChanges}
          className={styles.button}
          variant='contained'
          sx={{
            width: "30.9%",
            height: "2.5rem",
            background: "#fff",
            color: "black",
            borderRadius: "50px",
            margin: "0 3.5rem",
            padding: "0 7rem",
            fontFamily: "Nunito Sans",
            fontWeight: "bold",
            textTransform: "capitalize",
            postition: "absolute",
            right: "-36rem",
            "&:hover": {
              background: "#F9C959",
              color: "#fff",
            },
          }}>
          Save Changes
        </Button>
      </Stack>
    </div>
  );
};

export default function Order() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(viewCart());
    dispatch(getOrder(id));
    // dispatch(patchUpdate());
    // dispatch(getRecipe);
  }, [dispatch, id]);
  const { list } = useSelector((state) => state.recipe.listRecipe);
  // console.log("list", list);

  const {details} = useSelector((state) => state?.addCart?.cartUser);
  // console.log("details", details);

  const detailOrder = useSelector(
    (state) => state?.order?.orderDetails
  );
  // console.log("detailOrder", detailOrder?.orderList);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showform, setForm] = React.useState(false);
  const subtotal = details?.data?.reduce((x, y) => x + y.total, 0);
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
                  {/* This is Modal */}
                  <div className={styles.mapMenu}>
                    {details?.data?.map((data) => (
                      <div className={styles.imgData}>
                        <img src={data.image} alt='' onClick={handleOpen} />
                      </div>
                    ))}
                  </div>
                  <div className={styles.mapTitle}>
                    {details?.data?.map((data) => (
                      <h4>{data.title}</h4>
                    ))}
                  </div>
                  <div className={styles.mapAmount}>
                    {details?.data?.map((data) => (
                      <h4>{data.quantity}</h4>
                    ))}
                  </div>
                  <div className={styles.mapTotal}>
                    {details?.data?.map((data) => (
                      <h4 /*style={{ position: "relative", right: "5.6rem" }}*/>
                        {data.total}
                      </h4>
                    ))}
                  </div>
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
                              {list?.recipe?.map((data) => (
                                <li>{data.ingredient}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}></Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
            <div
              className={styles.PaymentContent}
              style={{ margin: "0rem 3rem 0 3rem" }}>
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
                    <li style={{ marginBottom: "1rem" }}>{subtotal}</li>
                    <li style={{ marginBottom: "1rem" }}>
                      {detailOrder?.orderList?.detailOrder?.deliveryFee}
                    </li>
                    <li style={{ color: "#B6340B", marginBottom: "1rem" }}>
                      {detailOrder?.orderList?.detailOrder?.deliveryFee + subtotal}
                    </li>
                  </ul>
                </div>
              </div>
              <Stack
                className={styles.buttons}
                spacing={2}
                direction='row'
                style={{
                  marginLeft: "43.5rem",
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
                      padding: "6px 20px 6px 20px",
                      fontFamily: "Nunito Sans",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}>
                    Checkout
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
