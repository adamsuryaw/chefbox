import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routes"
import HeaderToken from "./HeaderToken/HeaderToken";
import Header from "./Component/Header/Header";

function App() {
  // console.log(window.location.pathname, "pathname")
  return (
    <>
      {window.location.pathname == "/login" 
      || window.location.pathname == "/register" 
      || window.location.pathname == "/register/signup"
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
