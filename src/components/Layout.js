import Navbar from "./navbars/Navbar";
import Footer from "./footer/Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
