import React, { useState } from "react";
import styles from "./Navbar.module.scss"
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
            <Button className={styles.login}
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
            <Button className={styles.signup}
              variant='contained'
              sx={{
                background: "red",
                borderRadius: "50px",
                padding: "6px 30px",
                fontFamily: "Nunito Sans",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}>
              Signup
            </Button>
          </Stack>
        </div>
      </div>
  );
}
