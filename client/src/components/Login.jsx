import React, { useState,useContext } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

export default function Login(props) {
   const {
     isAuthenticated,
     user,
     setIsAuthenticated,
     setUser,
     Cartarr,
     setCartarr,
   } = useContext(AuthContext);
  const [curruser, SetcurrUser] = useState({ username: "", password: "" });
  const onChange = (e) => {
    e.preventDefault();
    SetcurrUser({ ...curruser, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    AuthService.login(curruser)
      .then((data) => {
        const { isAuthenticated, user } = data;
        console.log(data);
        if (isAuthenticated) {
          //console.log(user)
          setUser(user);
          setIsAuthenticated(isAuthenticated);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={onChange}
          placeholder="Enter Username"
        ></input>
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          placeholder="Enter password"
        ></input>

        <button type="submit"></button>
      </form>
    </div>
  );
}
