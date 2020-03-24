import React, { useState } from "react";
import PropTypes from "prop-types";
// import validateAuthentication from "./../../utils/validationUtils";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // state = {
  //   errorAuthusername: null,
  //   errorAuthemail: null,
  //   errorAuthpassword: null
  // };
  // userName = React.createRef();
  // userEmail = React.createRef();
  // userPassword = React.createRef();

  // submitEmailPassword = event => {
  //   event.preventDefault();
  //   console.log("tu");
  //   const data = {
  //     email: this.userEmail.current.value,
  //     pass: this.userPassword.current.value
  //   };

  //   this.props.authenticateWithEmailAndPass(data.email, data.pass);
  // };

  const errorUserName = this.state.errorAuthusername;
  const errorEmail = this.state.errorAuthemail;
  const errorPassword = this.state.errorAuthpassword;

  // console.log(error);
  return (
    <React.Fragment>
      <form onSubmit={this.submitEmailPassword}>
        {/* <input type="text" name="username" placeholder="username" val/> */}
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login by email</button>
      </form>
      {/* <nav className="authOption">
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
      </nav> */}
    </React.Fragment>
  );
};

Authentication.propTypes = {
  authenticateWithSocialNetwork: PropTypes.func.isRequired,
  authenticateWithEmailAndPass: PropTypes.func.isRequired
};

export default Authentication;
