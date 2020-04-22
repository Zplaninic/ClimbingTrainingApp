import React, { useContext } from "react";
import { Card, Button } from "./../../css/elements/AuthForm";
import { AuthContext } from "./../../context/auth";
import PropTypes from "prop-types";

const Logout = ({ history }) => {
  const Auth = useContext(AuthContext);

  const logoutHandler = async () => {
    console.log("logout");
    sessionStorage.removeItem("login");
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

Logout.propTypes = {
  history: PropTypes.object
};
export default Logout;
