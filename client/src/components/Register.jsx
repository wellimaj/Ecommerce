import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import './register.css'

export default function Register(props) {
  const {isAuthenticated, setIsAuthenticated, setUser} = useContext(AuthContext)
  const [user, SetUser] = useState({ username: "", password: "" });
  const onChange = (e) => {
    e.preventDefault();
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { username,password } = data;
       setUser(data);
       setIsAuthenticated(true);
       
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="myform">
        <label htmlFor="username">choose Username:</label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
