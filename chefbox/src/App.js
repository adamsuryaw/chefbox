<<<<<<< HEAD
import React from 'react'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
=======
import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routes";
>>>>>>> 1654faa9a1ee22c5f2e644da0841289de6677262

function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
      
=======
      <Navbar />
      <Routers />
      <Footer />
>>>>>>> 1654faa9a1ee22c5f2e644da0841289de6677262
    </>
  );
}

export default App;
