import React from "react";
import NavbarHome from "./navbars/NavbarHome";
import styled from "styled-components";

const Home = () => {
  return (
    <React.Fragment>
      <NavbarHome />
      <HomeGrid className="home">
        <h4>HOME PART</h4>
        <p>
          Here we will have training picker in different styles then navbar in
          climbing, other component
        </p>
        <p>Here will be button to analysis part</p>
        <p>here will be climbing news from some api</p>
        <p>8a.nu news</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </p>
      </HomeGrid>
    </React.Fragment>
  );
};

const HomeGrid = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1em;
`;

export default Home;
