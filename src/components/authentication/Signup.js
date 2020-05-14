import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  SocialButtonImage,
  AuthContainer,
  ErrorTag
} from "./../../css/elements/AuthForm";
import { validateAuthentication } from "./../../utils/validationUtils";
import PropTypes from "prop-types";
import axios from "axios";
import TrainingPicker from "./../navbars/TrainingPicker";

const Signup = ({ history, open, setOpen }) => {
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
    <AuthContainer>
      <TrainingPicker open={open} setOpen={setOpen} />
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
          <ErrorTag>
            Email must be a valid address, e.g. me@mydomain.com
          </ErrorTag>
        )}
        {(isPasswordError === "" || isPasswordError === false) && (
          <ErrorTag>
            Password must be alphanumeric (@, _ and - are also allowed) and be 8
            - 20 characters
          </ErrorTag>
        )}
        {!isPasswordConfirmed && (
          <ErrorTag>Both passwords should be the same</ErrorTag>
        )}
        <ErrorTag>{error}</ErrorTag>
      </Card>
    </AuthContainer>
  );
};

Signup.propTypes = {
  history: PropTypes.object
};

export default Signup;
