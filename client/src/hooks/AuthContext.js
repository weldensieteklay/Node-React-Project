import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const userDetails = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser({});
  };



  const contextValue = {
    user,
    userDetails,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
