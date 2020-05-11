import React from "react";
import TrainingPicker from "./navbars/TrainingPicker";
import styled from "styled-components";

const Home = props => {
  const path = props.location.pathname;
  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeGrid className="home">
        <ContentHome>
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
            eiusmod tempor
          </p>
        </ContentHome>
      </HomeGrid>
    </React.Fragment>
  );
};

const ContentHome = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`;
const HomeGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 2em;
`;

export default Home;
