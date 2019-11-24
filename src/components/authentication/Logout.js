import React from "react";
import PropTypes from "prop-types";

const Logout = props => (
  <nav className="logoutOption">
    <button onClick={() => props.logout()} className="logout">
      Logout
    </button>
  </nav>
);

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Logout;
