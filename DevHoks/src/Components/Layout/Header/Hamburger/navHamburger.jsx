import { useState } from "react";
import "../navbar.css";
import HamComponents from "./HamComponents/hamComponent";
import HamServicesComponent from "./HamComponents/hamServicesComponents";
import { NavLink } from "react-router-dom";

const NavHamburger = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navhamburger">
      <i
        className="fa-solid fa-bars ham-icon"
        onClick={() => setNavOpen(true)}
      ></i>

      {navOpen && (
        <div>
          <div className={`ham__layout__bg ${navOpen ? "open" : ""}`}></div>
          <div className={`ham-container ${navOpen ? "open" : ""} dark:bg-gray-900`}>
            <div className="flex justify-around items-center w-100 mt-4">
              <div className="navbar__left flex  gap-2">
                <img src="/logo.png" alt="Devhoks"></img>
                <NavLink
                  to="/"
                  className="navbar__logo opacity-80 text-white"
                >
                  Devhoks
                </NavLink>
              </div>
              <div className="ham-menu">
                <i
                  className="fa-solid fa-x close-icon"
                  onClick={() => setNavOpen(false)}
                ></i>
              </div>
            </div>
            <div className="container__wrapper mt-5">
              <ul className="ham-list">
                <HamComponents toward="" nam="HOME" />
                <HamServicesComponent />
                <HamComponents toward="projects" nam="PROJECTS" />
                <HamComponents toward="career" nam="CAREERS" />
                <HamComponents toward="events" nam="EVENTS" />
                <HamComponents toward="about" nam="ABOUT" />
              </ul>
            </div>

            <footer className="text-white flex flex-col gap-3 w-100 mt-24 px-4 footer__wrapper">
              <div className="flex gap-3 items-center email">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@devhoks.org">info@devhoks.org</a>
              </div>

              <div className="flex gap-3 items-center phone">
                <i className="fa-solid fa-phone-flip"></i>
                <a href="tel:+923000713725">+92-3000713725</a>
              </div>
              
              <div className="flex flex-row items-center gap-4 mt-2 social">
                <a href="https://twitter.com/devhoks" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter icon"></i>
                </a>
                <a href="https://facebook.com/devhoks" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f icon"></i>
                </a>
                <a href="https://instagram.com/devhoks.official" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram icon"></i>
                </a>
                <a href="https://www.linkedin.com/company/devhoks/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in icon"></i>
                </a>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavHamburger;
