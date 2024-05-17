// import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.authData
  );
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
