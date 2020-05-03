import React from "react";
import { Route, Redirect } from "react-router-dom";
import useCheckUser from "./../hooks/useCheckUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ isLoggedIn, isLoading }] = useCheckUser();
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
