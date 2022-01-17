import React, { useEffect,useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Context } from "../../contexts/store";
import AuthRoute from "../routes/AuthRoute";
import PrivateRoute from "../routes/PrivateRoute";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";

function MainRouter() {
  console.log("in main router");
  const { dispatch } = useContext(Context);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userData = localStorage.getItem("userData");
        userData = JSON.parse(userData);

        await dispatch({
          type: "UPDATE_USER_DATA",
          userData: userData,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);
  return (
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
