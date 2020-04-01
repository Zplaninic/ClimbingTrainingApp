import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  SocialButtonImage
} from "./../../css/elements/AuthForm";
import firebaseApp from "./../../firebase";
import firebase from "firebase";
import { AuthContext } from "./../../context/auth";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  const handleForm = e => {
    e.preventDefault();
    firebaseApp
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebaseApp
          .auth()
          .signInWithEmailAndPassword(email, password)
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
        <Button
          onClick={() => authenticateWithSocialNetwork("Github")}
          type="button"
        >
          <SocialButtonImage
            src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png"
            alt="logo"
          />
          Login With Github
        </Button>
        <Button
          onClick={() => authenticateWithSocialNetwork("Twitter")}
          type="button"
        >
          <SocialButtonImage
            src="https://sevilla.2019-2022.org/wp-content/uploads/2016/07/Logo-twitter.svg_.png"
            alt="logo"
          />
          Login With Twitter
        </Button>
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

export default Login;
