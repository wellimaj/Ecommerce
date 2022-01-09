import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

import "./Navbar.css";
import AuthService from "../Services/AuthService";

export default function Navbar(props) {
  const { isAuthenticated, user, setIsAuthenticated, setUser, cartcount } =
    useContext(AuthContext);
    function handleLogout(){
      AuthService.logout().then((data)=>
      {
        console.log(data)
        const {username,cart,role,success}=data
        setUser(data)
        setIsAuthenticated(false)
      })
    }

  
  
  const unauthenticatedNavbar = () => {
    return (
      <>
        <div className="right-nav">
          <div className="right-nav">
            <Link to="/login">login</Link>
          </div>

          <div className="right-nav">
            <Link to="/register">register</Link>
          </div>
        </div>
      </>
    );
    }
  const authenticatedNavbar = () => {
    return (
      <div className="right-nav-logged">
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div>logged in as {user.username}</div>
        <div>
          <Link to="/cart">cart({cartcount})</Link>
        </div>
      </div>
    );}

    return (
      <div className="nav-bowl">
        <nav className="nav-bowl">
          <Link to="/">
            <img
              src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"
              title="store"
              alt="Store Icon"
            ></img>
          </Link>
          <p className="name">Store.</p>
        </nav>

        {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
      </div>
    );}