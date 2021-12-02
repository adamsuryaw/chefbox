import React from "react";
import styles from "./Order.module.scss";
import MenuIMG from "../../components/assets/ChefBox/Order/Frame3.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Order() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.Body}>
      <div className={styles.SecondBody}>
        <div className={styles.ThirdBody}>
          <div
            style={{
              borderBottom: "3px groove",
              margin: "1rem 0rem 1.5rem -2rem",
              padding: "1rem 4rem 1.5rem 5rem",
            }}
            className={styles.OrderContainer}>
            <h1>Checkout</h1>
          </div>
          <div className={styles.OrderUserAddress}>
            <div className={styles.AddressUser}>
              <h3>Delivery Address</h3>
              <div className={styles.AddressUserName}>
                <h4>Justin Junaedi</h4>
                <div className={styles.AddressUserDetails}>
                  <p style={{ marginTop: "0.5rem" }} className={styles.address}>
                    Jl. Raya Jemursari No.258, Prapen, Kec. Tenggilis Mejoyo,
                    Kota SBY, Jawa Timur 60237
                  </p>
                  <p style={{ marginTop: "0.3rem", marginBottom: "0.5rem" }}>
                    +62 812 2345 2345
                  </p>
                </div>
              </div>
              <div className={styles.AddressUserDetailsButton}>
                <Stack className={styles.buttons} spacing={2} direction='row'>
                  <Button
                    className={styles.button}
                    variant='contained'
                    sx={{
                      background: "#fff",
                      color: "black",
                      borderRadius: "50px",
                      padding: "6px 30px",
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
          <div className={styles.ProductDetails}>
            <h3 style={{ color: "#828282" }}>Product Details</h3>
            <div className={styles.ProductDetailsMenus}>
              <div className={styles.MenuList}>
                <h5 style={{ color: "#828282" }}>Menu</h5>
                <h5 style={{ color: "#828282" }}>Amount</h5>
                <h5 style={{ color: "#828282" }}>Price</h5>
              </div>
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
                    Text in a modal
                  </Typography>
                  <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
              <h4>Healthy Fruit Oatmeal</h4>
              <h4>1</h4>
              <h4>Rp.35.000</h4>
            </div>
            <div className={styles.ProductContent}>
              <h4>Product content</h4>
              <div className={styles.ProductList}>
                <ul style={{ listStyleType: "circle" }}>
                  <li>1 kg package egg noodles</li>
                  <li>50 gr butter</li>
                  <li>50 gr minced parsley</li>
                  <li>50 gr salt</li>
                  <li>10 gr black pepper</li>
                  <li>100 ml olive oil</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.PaymentContent}>
            <ul className={styles.Subtotal}>
              <li>Subtotal</li>
              <li>Delivery Fee</li>
              <li style={{ color: "#B6340B" }}>Total</li>
            </ul>
            <ul className={styles.Nominal}>
              <li>Rp.35.000</li>
              <li>Rp.15.000</li>
              <li style={{ color: "#B6340B" }}>Rp.50.000</li>
            </ul>
            <Stack className={styles.buttons} spacing={2} direction='row'>
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
                }}>
                Choose Payment Method
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
