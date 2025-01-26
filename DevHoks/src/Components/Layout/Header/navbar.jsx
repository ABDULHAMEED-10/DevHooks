/* eslint-disable no-unused-vars */
import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavHamburger from "./Hamburger/navHamburger";
import NavComponents from "./NavbarComponenets/NavComponents";
import ServiceComponents from "./NavbarComponenets/ServicesComponents";
const Navbar = () => {
  const location = useLocation();
  const isServicePath = location.pathname.includes("service");

  return (
    <div className="navbar__container flex flex-row items-center gap-20 px-12 md:justify-around fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="navbar__left flex flex-row items-center justify-center gap-2">
        <img src="/logo.png" alt="Rixon" className="cursor-pointer"></img>
        <a href="/" className="navbar__logo md:opacity-50">
          Rixon
        </a>
      </div>

      <div className="navbar__right hidden md:flex lg:gap-2 lg:justify-between md:justify-end sm:justify-end ">
        <ul className="navbar__list ">
          <li>
            <NavComponents toward="" nam="Home" />
          </li>
          <div className="flex items-center align-center gap-1 for__icon navbar__item">
            <li>
              <ServiceComponents />
            </li>
            <i
              className="fa-solid fa-angle-down drop__down__icon text-gray-600"
              // style={{ color: isServicePath ? "black" : "gray" }}
            ></i>
          </div>
          <li>
            <NavComponents toward="projects" nam="Projects" />
          </li>
          <li>
            <NavComponents toward="about" nam="About us" />
          </li>
        </ul>
        <button className="flex items-center align-center transition duration-300 transform hover:scale-105">
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
