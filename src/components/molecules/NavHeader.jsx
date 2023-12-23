import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Atoms from "../atoms";
import * as Pages from "../pages";
const NavHeader = () => {
  return (
    <div>
      <Router>
        <nav className="nav-header">
          <ul className="nav-header__ul">
            <Atoms.LiHeader text={"Home"} to={"/"} />
            <Atoms.LiHeader text={"About"} to={"/About"} />
            <Atoms.LiHeader text={"Shop"} to={"/Shop"} />
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/About" element={<Pages.About />} />
          <Route path="/shop" element={<Pages.Shop />} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavHeader;
