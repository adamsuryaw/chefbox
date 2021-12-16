import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routes"
import HeaderToken from "./HeaderToken/HeaderToken";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <HeaderToken />
      <Routers />
      <Footer />
    </>
  )
}

export default App;
