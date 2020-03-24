import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  isLoading,
  ...rest
}) => {
  console.log(isLoggedIn);
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
