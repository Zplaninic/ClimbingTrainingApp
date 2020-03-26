import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  isLoading,
  ...rest
}) => {
  if (isLoading || isLoggedIn) {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props}></Component>;
        }}
      />
    );
  }
  return <Redirect to="/login" />;
};
export default PrivateRoute;
