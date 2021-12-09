import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to='/' className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt='' />
        </Link>
        <Stack className={styles.buttons} spacing={2} direction='row'>
          <Link to='/login'>
            <Button
              className={styles.login}
              variant='contained'
              sx={{
                background: "white",
                color: "black",
                borderRadius: "50px",
                padding: "6px 30px",
                fontFamily: "Nunito Sans",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}>
              Login
            </Button>
          </Link>
          <Link to='/register'>
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
              Signup
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}
