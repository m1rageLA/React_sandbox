import React from "react";
import "./styles/css/atoms.css";
import { NavLink } from "react-router-dom";

const LiHeader = ({ text, to }) => {
  return (
    <li className="ListItem">
      <NavLink className="LiHeader" to={to} activeClassName="active">{text}</NavLink>
    </li>
  );
};

export default LiHeader;
