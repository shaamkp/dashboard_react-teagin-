import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Context } from "../../contexts/store";
import AuthRoute from "../routes/AuthRoute";
import PrivateRoute from "../routes/PrivateRoute";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";

function MainRouter() {
  console.log("in main router");
  const { dispatch } = useContext(Context);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      let promise = new Promise((resolve, reject) => {
        let userData = localStorage.getItem("userData");
        userData = JSON.parse(userData);
        dispatch({
          type: "UPDATE_USER_DATA",
          userData: userData,
        });
        setTimeout(() => {
          resolve("done!");
          setLoading(false);
        }, 500);
      });

      let result = await promise;
    }

    fetchUserData();
  }, []);
  return isLoading ? (
    "Loading"
  ) : (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <AppRouter />
          </PrivateRoute>
        }
      />
      <Route
        path="/auth/*"
        element={
          <AuthRoute>
            <AuthRouter />
          </AuthRoute>
        }
      />
    </Routes>
  );
}

export default MainRouter;
