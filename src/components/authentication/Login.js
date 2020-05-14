import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  SocialButtonImage,
  AuthContainer
} from "./../../css/elements/AuthForm";
import PropTypes from "prop-types";
import axios from "axios";
import TrainingPicker from "./../navbars/TrainingPicker";

const Login = ({ history, open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const handleForm = e => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/signin`,
        { email, password },
        { withCredentials: true }
      )
      .then(function(res) {
        history.push("/");
      })
      .catch(function(e) {
        setEmail("");
        setPassword("");
        setErrors(e.message);
      });
  };

  return (
    <AuthContainer>
      <TrainingPicker open={open} setOpen={setOpen} />
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
    </AuthContainer>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
