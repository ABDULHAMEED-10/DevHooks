/* eslint-disable no-unused-vars */
import "./navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavHamburger from "./Hamburger/navHamburger";
import NavComponents from "./NavbarComponenets/NavComponents";
import ServiceComponents from "./NavbarComponenets/ServicesComponents";
const Navbar = () => {
  const location = useLocation();
  const isServicePath = location.pathname.includes("service");

  return (
    <div className="navbar__container flex flex-row items-center justify-start gap-20 px-20">
      <div className="navbar__left flex flex-row items-center justify-center gap-2">
        <img src="/logo.png" alt="Devhoks"></img>
        <NavLink to="/" className="navbar__logo">
          Devhoks
        </NavLink>
      </div>

      <div className="navbar__right">
        <ul className="navbar__list flex tracking-wide gap-5 ">
          <li>
            <NavComponents toward="" nam="Home" />
          </li>
          <div className="flex items-center align-center gap-1 for__icon navbar__item">
            <li>
              <ServiceComponents />
            </li>
            <i
              className="fa-solid fa-angle-down drop__down__icon"
              style={{ color: isServicePath ? "black" : "gray" }}
            ></i>
          </div>
          <li>
            <NavComponents toward="projects" nam="Projects" />
          </li>
          <li>
            <NavComponents toward="career" nam="Careers" />
          </li>
          <li>
            <NavComponents toward="events" nam="Events" />
          </li>
          <li>
            <NavComponents toward="about" nam="About" />
          </li>
        </ul>
        <button className="ml-5">
          <NavLink to="/contact" className="nav__button">
            Contact
          </NavLink>
        </button>
      </div>

      <NavHamburger />
    </div>
  );
};

export default Navbar;
