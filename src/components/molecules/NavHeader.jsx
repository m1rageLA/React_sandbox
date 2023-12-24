import React from "react";
import "./styles/css/molecules.css";
import * as Atoms from "../atoms";
import * as Pages from "../pages";

const NavHeader = () => {
  return (
    <div>
      <nav className="nav-header">
        <ul className="nav-header__ul">
          <Atoms.LiHeader text={"Home"} to={"/"} />
          <Atoms.LiHeader text={"Routing"} to={"/Routing"} />
          <Atoms.LiHeader text={"Form"} to={"/Form"} />
        </ul>
      </nav>
    </div>
  );
};

export default NavHeader;
