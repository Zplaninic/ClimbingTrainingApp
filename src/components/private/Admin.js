import React from "react";
import Logout from "./../authentication/Logout";

const Admin = ({ history }) => {
  return (
    <div>
      <div>Admin page</div>
      <Logout history={history}></Logout>
    </div>
  );
};

export default Admin;
