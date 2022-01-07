import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
export const AuthContext = createContext();
export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Data, setData] = useState([]);

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
  }, []);
  return (
    <div>
      {!isLoaded ? (
        <h1>Loadingg</h1>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated, Data }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
