import React from "react";
import PropTypes from "prop-types";

class Authentication extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <input type="text" name="username" placeholder="username" />
          <p>Username must be and contain 5 - 12 characters</p>

          <input type="text" name="email" placeholder="email" />
          <p>Email must be a valid address, e.g. me@mydomain.com</p>

          <input type="password" name="password" placeholder="password" />
          <p>
            Password must alphanumeric (@, _ and - are also allowed) and be 8 -
            20 characters
          </p>
        </form>
        <nav className="authOption">
          <button
            onClick={() => this.props.authenticate("Github")}
            className="gmail"
          >
            Log in with Github
          </button>
          <button
            onClick={() => this.props.authenticate("Twitter")}
            className="gmail"
          >
            Log in with Twitter
          </button>
        </nav>
      </React.Fragment>
    );
  }
}

Authentication.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Authentication;
