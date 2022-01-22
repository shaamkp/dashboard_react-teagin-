import { React, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Chatbox from "../../Chatbox";
import Contact from "../../Contact";
import Dashboard from "../../Dashboard";
import Sidebar from "../../include/Sidebar";

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
          {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
          <Route path="/dashboard" element={<Dashboard active={active} />} />

          <Route path="/contact" element={<Contact active={active} />} />

          <Route path="/chatbox" element={<Chatbox active={active} />} />
        </Route>

        {/* <Route path="/*" element={<Sidebar />} /> */}
      </Routes>
    </div>
  );
}

export default AppRouter;
