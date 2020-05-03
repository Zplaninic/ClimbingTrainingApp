import React from "react";
import Logout from "./../authentication/Logout";
import PropTypes from "prop-types";

const Admin = ({ history }) => {
  return (
    <div>
      <div>Admin page</div>
      <Logout history={history}></Logout>
    </div>
  );
};

Admin.propTypes = {
  history: PropTypes.object
};

export default Admin;
