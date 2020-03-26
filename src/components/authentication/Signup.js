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

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState("");
  const [isPasswordError, setIsPasswordError] = useState("");
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState("");
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
            validateAuthentication(e, setIsConfirmPasswordError);
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
        <p>Email must be a valid address, e.g. me@mydomain.com</p>
      )}
      {(isPasswordError === "" || isPasswordError === false) && (
        <p>
          Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20
          characters
        </p>
      )}
      {(isConfirmPasswordError === "" || isConfirmPasswordError === false) && (
        <p>
          Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20
          characters
        </p>
      )}
      {!isPasswordConfirmed && <div>Both passwords should be the same</div>}
      <span>{error}</span>
    </Card>
  );
};

export default Signup;

// https://cdn4.iconfinder.com/data/icons/contact-us-19/48/71-512.png
