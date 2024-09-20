/* eslint-disable no-unused-vars */
import "./navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavHamburger from "./Hamburger/navHamburger";

const Navbar = () => {
  const location = useLocation();
  const isServicePath = location.pathname.includes("service");

  return (
    <div className="navbar__container flex flex-row items-center justify-start gap-20 px-20">
      <div className="navbar__left flex items-center  gap-3">
        <img src="/logo.png" alt="Devhoks"></img>
        {/* <Link to="/" className="navbar__logo">DevHoks</Link> */}
      </div>

      <div className="navbar__right">
        <ul className="navbar__list flex tracking-wide gap-5 ">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  paddingBottom: "0.3rem",
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              className="navbar__link"
            >
              Home
            </NavLink>
          </li>
          <div className="flex items-center align-center gap-1 for__icon navbar__item">
            <li>
              <NavLink
                to="/services"
                style={({ isActive }) => {
                  return {
                    paddingBottom: "0.3rem",
                    color: isActive ? "black" : "gray",
                    fontWeight: isActive ? "bold" : "normal",
                  };
                }}
                className="navbar__link  py-5"
              >
                Services
              </NavLink>
              <ul className="dropdown">
                <li className="flex items-center justify-start">
                  <span className="line ml-3 "></span>
                  <NavLink to="/services/service1">Ui/Ux Designing</NavLink>
                </li>
                <li className="flex items-center  justify-start">
                  <span className="line ml-3 "></span>
                  <NavLink to="/services/service1">Web Development</NavLink>
                </li>
                <li className="flex items-center  justify-start">
                  <span className="line ml-3 "></span>
                  <NavLink to="/services/service1">App Development</NavLink>
                </li>
                <li className="flex items-center  justify-start">
                  <span className="line ml-3 "></span>
                  <NavLink to="/services/service1">Ui/Ux Designing</NavLink>
                </li>
                <li className="flex items-center  justify-start">
                  <span className="line ml-3 "></span>
                  <NavLink to="/services/service1">Web Development</NavLink>
                </li>
                <li className="flex items-center  justify-start">
                  <span className="line ml-3 "></span>
                  <NavLink to="/services/service1">App Development</NavLink>
                </li>
              </ul>
            </li>
            <i
              className="fa-solid fa-angle-down drop__down__icon"
              style={{ color: isServicePath ? "black" : "gray" }}
            ></i>
          </div>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return {
                  paddingBottom: "0.3rem",
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              className="navbar__link"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              style={({ isActive }) => {
                return {
                  paddingBottom: "0.3rem",
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              className="navbar__link"
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              style={({ isActive }) => {
                return {
                  paddingBottom: "0.3rem",
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              className="navbar__link"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  paddingBottom: "0.3rem",
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              className="navbar__link"
            >
              About
            </NavLink>
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
