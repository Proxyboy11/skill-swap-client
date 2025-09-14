// src/utils/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// Replace auth check with your real auth method (context / redux / localStorage)
const isAuthenticated = () => {
  // example: return !!localStorage.getItem("token");
  // or use your auth context: return Boolean(user)
  return Boolean(localStorage.getItem("token"));
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/unauth" replace />;
  }
  return children;
};

export default ProtectedRoute;
