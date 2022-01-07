import React from "react";
import Navbar from "./components/Navbar";

import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

 function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );}
export default App;