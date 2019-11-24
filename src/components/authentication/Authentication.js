import React from "react";
import PropTypes from "prop-types";

const Authentication = props => (
  <nav className="authOption">
    <button onClick={() => props.authenticate("Github")} className="gmail">
      Log in with Github
    </button>
    <button onClick={() => props.authenticate("Twitter")} className="gmail">
      Log in with Twitter
    </button>
  </nav>
);

Authentication.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Authentication;
