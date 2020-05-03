import React from "react";
import { Card, Button } from "./../../css/elements/AuthForm";
import PropTypes from "prop-types";

const Logout = ({ history }) => {
  const logoutHandler = async () => {
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
