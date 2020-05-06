import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  SocialButtonImage
} from "./../../css/elements/AuthForm";
import { validateAuthentication } from "./../../utils/validationUtils";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState("");
  const [isPasswordError, setIsPasswordError] = useState("");
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);
  const [error, setErrors] = useState("");

  const handleForm = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordConfirmed(false);
      setPassword("");
      setConfirmPassword("");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/signup`,
          { email, password },
          { withCredentials: true }
        )
        .then(function(res) {
          history.push("/");
        })
        .catch(function(e) {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setErrors(e.message);
        });
    }
  };
  return (
    <Card>
      <Form onSubmit={e => handleForm(e)}>
        <Input
          name="email"
          value={email}
          type="email"
          placeholder="email"
          onChange={e => {
            validateAuthentication(e, setIsEmailError);
            setEmail(e.target.value);
          }}
        />
        <Input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={e => {
            validateAuthentication(e, setIsPasswordError);
            setPassword(e.target.value);
          }}
        />
        <Input
          name="password"
          value={confirmPassword}
          type="password"
          placeholder="password again"
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
        />
        <Button type="submit">
          <SocialButtonImage
            src="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/71-512.png"
            alt="logo"
          />
          Sign Up With Email
        </Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      {(isEmailError === "" || isEmailError === false) && (
        <ErrorTag>Email must be a valid address, e.g. me@mydomain.com</ErrorTag>
      )}
      {(isPasswordError === "" || isPasswordError === false) && (
        <ErrorTag>
          Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20
          characters
        </ErrorTag>
      )}
      {!isPasswordConfirmed && (
        <ErrorTag>Both passwords should be the same</ErrorTag>
      )}
      <ErrorTag>{error}</ErrorTag>
    </Card>
  );
};

const ErrorTag = styled.p`
  margin: 10px;
  color: #c8331b;
`;
Signup.propTypes = {
  history: PropTypes.object
};

export default Signup;
