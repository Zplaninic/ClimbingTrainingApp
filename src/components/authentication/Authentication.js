import React from "react";
import PropTypes from "prop-types";

class Authentication extends React.Component {
  userName = React.createRef();
  userEmail = React.createRef();
  userPassword = React.createRef();

  submitEmailPassword = event => {
    event.preventDefault();
    console.log("tu");
    const data = {
      email: this.userEmail.current.value,
      pass: this.userPassword.current.value
    };

    this.props.authenticateWithEmailAndPass(data.email, data.pass);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitEmailPassword}>
          <input
            type="text"
            name="username"
            placeholder="username"
            ref={this.userName}
          />
          <p>Username must be and contain 5 - 12 characters</p>

          <input
            type="text"
            name="email"
            placeholder="email"
            ref={this.userEmail}
          />
          <p>Email must be a valid address, e.g. me@mydomain.com</p>

          <input
            type="password"
            name="password"
            placeholder="password"
            ref={this.userPassword}
          />
          <p>
            Password must alphanumeric (@, _ and - are also allowed) and be 8 -
            20 characters
          </p>
          <button type="submit">Login by email</button>
        </form>
        <nav className="authOption">
          <button
            onClick={() => this.props.authenticateWithSocialNetwork("Github")}
            className="gmail"
          >
            Log in with Github
          </button>
          <button
            onClick={() => this.props.authenticateWithSocialNetwork("Twitter")}
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
  authenticateWithSocialNetwork: PropTypes.func.isRequired,
  authenticateWithEmailAndPass: PropTypes.func.isRequired
};

export default Authentication;
