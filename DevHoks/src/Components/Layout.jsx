/* eslint-disable no-unused-vars */
import Footer from "./Layout/Footer/footer";
import Navbar from "./Layout/Header/navbar";
import React from "react";
import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";
const Layout = ({children}) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <BeatLoader
          color="#00a84e"
          cssOverride={{
            borderColor: "#00a84e",
            zIndex: 9999,
          }}
          loading
          margin={0}
          size={48}
          speedMultiplier={1}
        />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
