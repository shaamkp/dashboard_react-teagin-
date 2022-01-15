import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import AppRouter from "./AppRouter"
import AuthRouter from './AuthRouter';

function MainRouter() {
    console.log("in main router");
    return (
        <Routes>
            <Route path="/*" element={<AppRouter />} />
            <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
    )
}

export default MainRouter
