/* eslint-disable no-unused-vars */
import Footer from "./Layout/Footer/footer";
import Navbar from "./Layout/Header/navbar";
import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      {/* anything to display on top of the navbar will be here */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

{/* <BeatLoader
color="#00a84e"
    cssOverride={{
      display: "block",
      margin: "0 auto",
      borderColor: "#00a84e",
      zIndex: 9999,
}}
loading
margin={0}
size={48}
speedMultiplier={1}
/> */}