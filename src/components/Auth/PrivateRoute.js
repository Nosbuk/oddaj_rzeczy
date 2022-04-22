import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet {...rest} /> : <Navigate to="/zaloguj" />;
};
