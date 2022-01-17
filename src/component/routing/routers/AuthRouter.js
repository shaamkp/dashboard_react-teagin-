import React from "react";
import Login from "../../Login";
import { Route, Routes } from "react-router-dom";

function AuthRouter() {
  console.log("in auth router");
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AuthRouter;
