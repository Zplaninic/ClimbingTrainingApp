import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  SocialButtonImage
} from "./../../css/elements/AuthForm";
import { validateAuthentication } from "./../../utils/validationUtils";
import firebaseApp from "./../../firebase";
import firebase from "firebase";
import { AuthContext } from "./../../context/auth";
import styled from "styled-components";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState("");
  const [isPasswordError, setIsPasswordError] = useState("");
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  const handleForm = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordConfirmed(false);
      setPassword("");
      setConfirmPassword("");
    } else {
      firebaseApp
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
              if (res.user) {
                Auth.setUserID(res.user.uid);
                Auth.setLoggedIn(true);
                Auth.setIsLoading(false);
                history.push("/");
              }
            })
            .catch(e => {
              setErrors(e.message);
            });
        });
    }
  };

  const authenticateWithSocialNetwork = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();

    firebaseApp
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebaseApp
          .auth()
          .signInWithPopup(authProvider)
          .then(res => {
            Auth.setUserID(res.user.uid);
            Auth.setLoggedIn(true);
            Auth.setIsLoading(false);
            history.push("/");
          })
          .catch(e => setErrors(e.message));
      });
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
        <Button
          onClick={() => authenticateWithSocialNetwork("Github")}
          type="button"
        >
          <SocialButtonImage
            src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png"
            alt="logo"
          />
          Join With Github
        </Button>
        <Button
          onClick={() => authenticateWithSocialNetwork("Twitter")}
          type="button"
        >
          <SocialButtonImage
            src="https://sevilla.2019-2022.org/wp-content/uploads/2016/07/Logo-twitter.svg_.png"
            alt="logo"
          />
          Join With Twitter
        </Button>
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

export default Signup;

// https://cdn4.iconfinder.com/data/icons/contact-us-19/48/71-512.png
