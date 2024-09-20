import { useState } from "react";
import "../navbar.css";
import { NavLink } from "react-router-dom";

const NavHamburger = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <div className="navhamburger">
      <i
        className="fa-solid fa-bars ham-icon"
        onClick={() => setNavOpen(true)}
      ></i>

      {navOpen && (
        <div className="ham-container">
          <div className="container__wrapper">
            <div className="ham-menu">
              <i
                className="fa-solid fa-x close-icon"
                onClick={() => setNavOpen(false)}
              ></i>
            </div>
            <div className="ham-list">
              <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }} >
                <div className="ham__list-item">Home</div>
              </NavLink>
              <div
                className="services-main"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <i className="fa-solid fa-angle-down down__icon ham__list-item "></i>
                <span className="ham__list-item">
                  Services
                  {/*  */}
                </span>
              </div>
              {servicesOpen && (
                <div className="services-items">
                  <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                    <span className="ham__list-item sub_items">
                      Ui/Ux Designing
                    </span>
                  </NavLink>
                  <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                    <span className="ham__list-item sub_items">
                      Web Development
                    </span>
                  </NavLink>
                  <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                    <span className="ham__list-item sub_items">
                      App Development
                    </span>
                  </NavLink>
                  <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                    <span className="ham__list-item sub_items">
                      Ui/Ux Designing
                    </span>
                  </NavLink>
                  <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                    <span className="ham__list-item sub_items">
                      Web Development
                    </span>
                  </NavLink>
                  <NavLink to="/" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                    <span className="ham__list-item sub_items">
                      App Development
                    </span>
                  </NavLink>
                </div>
              )}
              <NavLink to="/projects" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                <div className="ham__list-item">Projects</div>
              </NavLink>
              <NavLink to="/career" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                <div className="ham__list-item">Careers</div>
              </NavLink>
              <NavLink to="/events" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                <div className="ham__list-item">Events</div>
              </NavLink>
              <NavLink to="/about" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}>
                <div className="ham__list-item">About</div>
              </NavLink>
            </div>
          </div>
          <button className="ham-btn">
            <NavLink to="/" className="">
              Contact
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default NavHamburger;
