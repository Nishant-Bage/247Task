import React, { createContext, useState } from "react";
import { login as loginAPI } from "../api/auth";

export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);

  const login = async (username, password) => {
    const data = await loginAPI(username, password);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};