import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import Order from "../page/order/Order";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/order' element={<Order />} />
      </Routes>
    </>
  );
}
