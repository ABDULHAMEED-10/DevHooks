import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../navbar.css";
import HamServicesType from "./hamServicesType";
import { servicestype } from "../../../../../demoData";
export const HamServicesComponent = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <>
      <NavLink
        className="services-main"
        onClick={() => setServicesOpen(!servicesOpen)}
      >
        <span className="ham__list-item flex items-center content-center justify-between">
          SERVICES
          {/*  */}
          <i className="fa-solid fa-plus down__icon "></i>
        </span>
      </NavLink>
      {servicesOpen && (
        <div className="services-items">
          {servicestype.map((item) => (
            <HamServicesType
              key={item.id}
              to={item.to}
              name={item.title.toUpperCase()}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HamServicesComponent;
