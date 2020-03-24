import React from "react";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <div className="home-menu">
      <ul>
        <li>
          <Link to="/climbing">Climbing</Link>
        </li>
        <li>
          <Link to="/strength">Strength</Link>
        </li>
        <li>
          <Link to="/fingerboard">Fingerboard</Link>
        </li>
        <li>
          <Link to="/analysis">Analysis</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHome;
