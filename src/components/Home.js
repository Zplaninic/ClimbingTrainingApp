import React from "react";
import NavbarHome from "./navbars/NavbarHome";
import Logout from "./authentication/Logout";

const Home = () => {
  return (
    <React.Fragment>
      <NavbarHome />
      <h4>HOME PART</h4>
      <p>
        Here we will have training picker in different styles then navbar in
        climbing, other component
      </p>
      <p>Here will be button to analysis part</p>
      <p>here will be climbing news from some api</p>
      <p>8a.nu news</p>
      {/* <Logout logout={this.props.logout} /> */}
    </React.Fragment>
  );
};

export default Home;
