import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [user, SetUser] = useState({ username: "", password: "" });
  const onChange = (e) => {
    e.preventDefault();
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    AuthService.login(user)
      .then((data) => {
        const { isAuthenticated, userd } = data;
       console.log(data)
        if (isAuthenticated) {
          //console.log(user)
          AuthContext.setUser(user);
          AuthContext.setIsAuthenticated(isAuthenticated);
         
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

        <button type="submit">
          <Link to='/'>login</Link>
        </button>
      </form>
    </div>
  );
}
