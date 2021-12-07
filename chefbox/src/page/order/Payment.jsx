import React from "react";
import styles from "./Payment.module.scss";
import Timer from "./Timer"

export default function Payment() {
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
              <h2 style={{ color: "#333333" }}>Bank Transfer</h2>
              <p> Please complete your payment</p>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
