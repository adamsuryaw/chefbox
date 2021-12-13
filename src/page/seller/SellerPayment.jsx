import React from "react";
import styles from "./SellerPayment.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Photo from "../../Asset/payment-photo.svg";

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

export default function Payment() {
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
              margin: "0rem 0rem 1.5rem 0rem",
              padding: "1rem 0rem 0.7rem 2rem",
            }}
            className={styles.Container}>
            <h1>Confirm Payment</h1>
          </div>
          <div className={styles.BankContainer}>
            <div className={styles.BankDetails}>
              <h2 style={{ color: "#333333", marginTop: "2rem" }}>
                Bank Transfer
              </h2>
              <p style={{ margin: "1rem 0 1.5rem 0" }}>
                {" "}
                Please complete your payment
              </p>
              <div className={styles.OrderLists}>
                <div className={styles.FirstOrder}>
                  <h4 style={{ textAlign: "left" }}>Sate Lontong</h4>
                  <h4 style={{ textAlign: "left" }}>213100</h4>
                </div>
                <div className={styles.SecondOrder}>
                  <h4>Es Teh</h4>
                  <h4>100000</h4>
                </div>
              </div>
              <div className={styles.DetailedBank}>
                <div className={styles.DetailedBankContainer}>
                  <p>Total</p>
                  <p>Bank</p>
                  <p>Account Name</p>
                  <p>Account No</p>
                </div>
                <div className={styles.DetailedBankContainerNominal}>
                  <h4>Rp 51.500,00</h4>
                  <h4>Bank Central Asia</h4>
                  <h4>PT. Chef Box Indonesia</h4>
                  <h4>0123456789</h4>
                </div>
              </div>
            </div>
          </div>
          <Stack
            className={styles.buttons}
            spacing={5}
            direction='row'
            sx={{ marginTop: "3rem" }}>
            <Button
              className={styles.button}
              variant='contained'
              sx={{
                width: "100%",
                background: "#F2F2F2",
                color: "black",
                borderRadius: "5px",
                margin: "0 3.5rem",
                padding: "5px 17.9rem",
                fontFamily: "Nunito Sans",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}>
              Upload Receipt
            </Button>
          </Stack>
          <img style={{ marginTop: "2rem", width: "13%" }} src={Photo} alt='' />
          <div className={styles.LowerSection}>
            <Link to='/seller'>
              <h4>Back to order details</h4>
            </Link>
            <Stack className={styles.buttons} spacing={5} direction='row'>
              <Link to='/seller'>
                <Button
                  className={styles.button}
                  variant='contained'
                  sx={{
                    width: "100%",
                    background: "#B6340B",
                    color: "#FFF",
                    borderRadius: "50px",
                    margin: "0 3.5rem",
                    marginRight: "4rem",
                    marginLeft: "1rem",
                    padding: "5px 1.5rem",
                    fontFamily: "Nunito Sans",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}>
                  Verify Payment
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
