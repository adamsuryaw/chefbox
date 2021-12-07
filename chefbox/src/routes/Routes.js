import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import Order from "../page/order/Order";
import Register from "../Component/Register/Register";
import Signup from "../Component/Signup/Signup";
import Login from "../Pages/Login/Login";
import Dashboard from "../page/dashboard/MyRecipe";
import Recipe from "../Component/Recipe/Recipe";
import Details from "../Component/DetailRecipe/DetailRecipe";
import Payment from "../page/order/Payment";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/details' element={<Details />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/order/payment' element={<Payment />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/recipe' element={<Recipe />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/register/signup' element={<Signup />} />
      </Routes>
    </>
  );
}
