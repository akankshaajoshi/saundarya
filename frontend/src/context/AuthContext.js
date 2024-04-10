import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser({ email: localStorage.getItem("user") });
    }
  }, []);

  const login = (email, password) => {
    localStorage.setItem("user", email);
    setUser({ email });
  };

  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
