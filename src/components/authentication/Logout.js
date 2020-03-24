import React, { useContext } from "react";
import { Card, Button } from "./../../css/elements/AuthForm";
import firebase from "firebase";
import { AuthContext } from "./../../context/auth";

const Logout = ({ history }) => {
  const Auth = useContext(AuthContext);

  const logoutHandler = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    Auth.setLoggedIn(false);
    Auth.setIsLoading(false);
    history.push("/");
  };

  return (
    <Card>
      <Button onClick={() => logoutHandler()} className="logout">
        Logout
      </Button>
    </Card>
  );
};
export default Logout;
