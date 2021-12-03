import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import Order from "../page/order/Order";
import Register from "../Component/Register/Register";
import Login from "../Pages/Login/Login";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Register/Login' element={<Login />} />
      </Routes>
    </>
  );
}
