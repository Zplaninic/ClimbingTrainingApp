import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  SocialButtonImage
} from "./../../css/elements/AuthForm";
import { AuthContext } from "./../../context/auth";
import PropTypes from "prop-types";
import axios from "axios";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  const handleForm = e => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/signin", { email, password })
      .then(function(res) {
        sessionStorage.setItem("login", JSON.stringify(res.data));
        Auth.setLoggedIn(true);
        Auth.setIsLoading(false);
        history.push("/");
      })
      .catch(function(e) {
        setEmail("");
        setPassword("");
        setErrors(e.message);
      });
  };

  return (
    <Card>
      <Form onSubmit={e => handleForm(e)}>
        <Input
          name="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button>
          <SocialButtonImage
            src="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/71-512.png"
            alt="logo"
          />
          Login With Email
        </Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      <span>{error}</span>
    </Card>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
