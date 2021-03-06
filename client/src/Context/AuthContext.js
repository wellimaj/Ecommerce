import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
export const AuthContext = createContext();
export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Data, setData] = useState([]);
  const [Cartarr, setCartarr] = useState([]);
  const [cartcount, setCartcount] = useState(0);
  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
      AuthService.getData().then((data) => {
        //console.log("yes");
        setData(data);
      });
    });
  }, [isAuthenticated]);
  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            Data,
            Cartarr,
            setCartarr,
            cartcount,
            setCartcount,
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
