// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../navbar.css";
export const ServicesType = ({ to, name }) => {
  return (
    <li className="flex items-center  justify-start">
      <span className="line ml-3 "></span>
      <NavLink to={to}>{name}</NavLink>
    </li>
  );
};

ServicesType.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ServicesType;
