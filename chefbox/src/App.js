import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Routers from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
