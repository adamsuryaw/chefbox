import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import Order from "../page/order/Order";
import Register from "../Component/Register/Register";
import Signup from "../Component/Signup/Signup";
import Login from "../Pages/Login/Login";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/register/signup' element={<Signup />} />
      </Routes>
    </>
  );
}
