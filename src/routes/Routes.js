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
import CreateDesc from "../Component/CreateDesc/CreateDesc";
import CreateDirect from "../Component/CreateDirect/CreateDirect";
import CreateIngred from "../Component/CreateIngred/CreateIngred";
import CreateProduct from "../Component/CreateProduct/CreateProduct";
import Account from "../Component/Account/Account";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import HeaderToken from "../HeaderToken/HeaderToken";

export default function Routers() {
  return (
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/register/signup' element={<Signup />} />
      {/* <DefaultLayout> */}
      <Route exact path='/' element={<Home />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/details' element={<Details />} />
      <Route exact path='/order' element={<Order />} />
      <Route exact path='/order/payment' element={<Payment />} />
      <Route exact path='/recipe' element={<Recipe />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/create' element={<CreateDesc />} />
      <Route exact path='/create/ingredient' element={<CreateIngred />} />
      <Route exact path='/create/direct' element={<CreateDirect />} />
      <Route exact path='/create/product' element={<CreateProduct />} />
      <Route exact path='/account' element={<Account />} />
      {/* </DefaultLayout> */}
    </Routes>
  );
}
