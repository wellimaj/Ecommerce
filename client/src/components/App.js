import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";

import Products from "./Products";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext} from "../Context/AuthContext";

 function App() {
   const { isAuthenticated, user, setIsAuthenticated, setUser, cartcount } =
     useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={(isAuthenticated?<Products />:<Login></Login>)} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );}
export default App;