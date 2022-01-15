import {React,useState} from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Dashboard from "../Dashboard";
import Sidebar from "../include/Sidebar";

function AppRouter() {
  const [active, setActive] = useState(false);
  console.log("in app router");
  return (
    <div>
      <Routes>
        
          <Route
            path="/"
            element={<Sidebar active={active} setActive={setActive} />}
          >
            <Route
              path="/dashboard"
              element={<Dashboard active={active} />}
            />
            <Route
              path="/contact"
              element={<Contact active={active} />}
            />
          </Route>
        

        {/* <Route path="/*" element={<Sidebar />} /> */}
      </Routes>
    </div>
  );
}

export default AppRouter;
