
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import '../../navbar.css'
const HamComponents = ({toward,nam}) => {
  return (
    <NavLink to={`/${toward}`}>
          <div className="ham__list-item">{nam}</div>
      </NavLink>
  )
}
    
HamComponents.propTypes = {
  toward: PropTypes.string.isRequired,
  nam: PropTypes.string.isRequired,
};

export default HamComponents;

