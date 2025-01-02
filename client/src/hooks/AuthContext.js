import React, { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const navigate = useNavigate();

  const userDetails = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser({});
    // navigate("/Home-page");
  };

  const contextValue = {
    user,
    userDetails,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
