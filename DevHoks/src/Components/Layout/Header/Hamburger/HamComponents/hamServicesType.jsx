import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../../navbar.css";
export const HamServicesType = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
        };
      }}
    >
      <span className="ham__list-item sub_items">{name}</span>
    </NavLink>
  );
};

HamServicesType.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HamServicesType;
