import React from "react";
import Navbar from "./components/Navbar";

import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );}
export default App;