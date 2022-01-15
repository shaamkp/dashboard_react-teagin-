import logo from "./logo.svg";
import "./App.css";
import Login from "../src/component/Login";
import Dashboard from "./component/Dashboard";
import Sidebar from "./component/include/Sidebar";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRouter from "./component/Routers/MainRouter";

function App() {
  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  );
}

export default App;
