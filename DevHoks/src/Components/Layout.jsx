/* eslint-disable no-unused-vars */
import Footer from './Layout/Footer/footer';
import Navbar from './Layout/Header/navbar';
import React from 'react';
import PropTypes from 'prop-types';

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