// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import '../navbar.css'
const NavComponents = ({toward,nam}) => {
  return (
    <NavLink
    to={`/${toward}`}
    style={({ isActive }) => {
      return {
        color: isActive ? "black" : "gray",
        fontWeight: isActive ? "bold" : "normal",
        fontSize: isActive ? "1.1rem" : "1rem",
      };
    }}
    className="navbar__link"
  >
    {nam}
  </NavLink>
  )
}



    
NavComponents.propTypes = {
  toward: PropTypes.string.isRequired,
  nam: PropTypes.string.isRequired,
};

export default NavComponents;

