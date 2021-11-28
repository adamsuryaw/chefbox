import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  // const [click, setClick] = useState(false)
  // const handleClick = () => {!click}
  const styles = {
    borderRadius: "1rem",
    border: "1rem solid",
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img className='logo' src={Logo} alt='' />
          </Link>
          <Stack spacing={2} direction='row'>
            <Button
              variant='contained'
              sx={{
                background: "white",
                color: "black",
                borderRadius: "50px",
                padding: "6px 30px",
              }}>
              Login
            </Button>
            <Button
              variant='contained'
              sx={{
                background: "red",
                borderRadius: "50px",
                padding: "6px 30px",
              }}>
              Signup
            </Button>
          </Stack>
        </div>
      </nav>
    </>
  );
}
