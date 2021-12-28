import "./App.css";
import React from "react";
// import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routes"
import HeaderToken from "./HeaderToken/HeaderToken";
import {useLocation} from "react-router-dom"
// import Header from "./Component/Header/Header";

function App() {
  const location = useLocation()
  // console.log(window.location.pathname, "pathname")
  return (
    <>
      {location.pathname === "/login" 
      || location.pathname === "/register" 
      || location.pathname === "/register/signup"
      ?
        null
        :
        <HeaderToken />
      }
      
      <Routers />
      <Footer />
    </>
  )
}

export default App;
