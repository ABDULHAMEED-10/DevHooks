// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar.css";
import ServicesType from "./ServicesType";
import { servicestype } from "../../../../demoData.jsx";
const ServiceComponents = () => {
  return (
    <>
      <NavLink
        to="/services"
        // style={({ isActive }) => {
        //   return {

        //     color: isActive ? "black" : "gray",
        //     fontWeight: isActive ? "bold" : "normal",
        //   };
        // }}
        className="navbar__link  py-5 font-bold text-gray-600"
      >
        Services
      </NavLink>
      <ul className="dropdown">
        {servicestype.map((service) => (
          <ServicesType key={service.id} to={service.to} name={service.title} />
        ))}
      </ul>
    </>
  );
};
export default ServiceComponents;
