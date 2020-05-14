import React from "react";
import { Route, Redirect } from "react-router-dom";
import useCheckUser from "./../hooks/useCheckUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log(open, setOpen);
  const [{ isLoggedIn, isLoading }] = useCheckUser();
  if (isLoading || isLoggedIn) {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} {...rest}></Component>;
        }}
      />
    );
  }
  return <Redirect to="/login" />;
};
export default PrivateRoute;
