import React from "react";
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App mx-3">
      <div className="customNavbarClass">
        <NavLink to="/" className="Link NavLink neon-text">
          Home
        </NavLink>
      </div>
      <div className="d-flex justify-content-center container-neon">
        <div className="Content" id="Content">
          <Outlet />
        </div>
      </div>
      <div className="footer">
        <Footer url="/assets/highseason.mp3" />
      </div>
    </div>
  );
}

export default App;
