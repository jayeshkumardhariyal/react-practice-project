import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const token = localStorage.getItem("token");
  return token ? props.children : <Navigate to={"/login"}></Navigate>;
};

export default ProtectedRoute;
