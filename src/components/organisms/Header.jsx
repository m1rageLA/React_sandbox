import React from "react";
import * as Molecules from "../molecules";
import * as Atoms from "../atoms";
import "./styles/css/organisms.css";

const Header = () => {
  return (
    <header>
      <Atoms.ImgHeader className="logo-header" />
      <Molecules.NavHeader className="nav-header" />
      <Atoms.ImgHeader className="logo-header" />
    </header>
  );
};

export default Header;
