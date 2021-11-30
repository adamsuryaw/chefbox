import React from "react";
import styles from "./Order.module.scss";
import MenuIMG from "../../components/assets/ChefBox/Order/Frame3.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Order() {
  return (
    <div className={styles.Body}>
      <div className={styles.SecondBody}>
        <div className={styles.ThirdBody}>
          <div className={styles.OrderContainer}>
            <h1>Checkout</h1>
          </div>
          <div className={styles.OrderUserAddress}>
            <h3>Delivery Address</h3>
            <h4>Justin Junaedi</h4>
            <p>
              Jl. Raya Jemursari No.258, Prapen, Kec. Tenggilis Mejoyo, Kota
              SBY, Jawa Timur 60237
            </p>
            <p>+62 812 2345 2345</p>
          </div>
          <div className={styles.OrderProduct}>
            <h3 style={{ color: "#828282" }}>Product Details</h3>
            <h5 style={{ color: "#828282" }}>Menu</h5>
            <h5 style={{ color: "#828282" }}>Amount</h5>
            <h5 style={{ color: "#828282" }}>Price</h5>
            <img src={MenuIMG} alt='' />
            <h4>Healthy Fruit Oatmeal</h4>
            <h4>1</h4>
            <h4>Rp.35.000</h4>
            <div className={styles.ProductContent}>
              <h4>Product content</h4>
              <ul>
                <li>1 kg package egg noodles</li>
                <li>50 gr butter</li>
                <li>50 gr minced parsley</li>
                <li>50 gr salt</li>
                <li>10 gr black pepper</li>
                <li>100 ml olive oil</li>
              </ul>
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
                  className={styles.signup}
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
    </div>
  );
}
