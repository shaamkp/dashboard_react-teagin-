import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/store";

export default function AuthRoute({ children }) {
  const { state } = useContext(Context);
  const auth = state.userData.isVerified;
  
  return !auth ? children : <Navigate to="/dashboard" />;
}
