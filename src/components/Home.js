import React from "react";
import TrainingPicker from "./navbars/TrainingPicker";
import styled from "styled-components";
import { device } from "./../css/device";

const Home = ({ location, open, setOpen, node }) => {
  const path = location.pathname;
  return (
    <React.Fragment>
      <TrainingPicker path={path} open={open} setOpen={setOpen} />
      <HomeGrid className="home">
        <ContentHome ref={node}>
          <p>Welcome to the web app ClimbThe.best</p>
          <p>
            The idea behind this project is to systematically track your
            climbing tranining
          </p>
          <p>
            Training is separated in three separate components: strength
            exercises, fingerboard sessons and climbing routes
          </p>
          <p>
            Later will come the analysis part with interesting charts regarding
            your progression
          </p>
          <p>
            For the moment you can login with any email you have, can be real or
            some fake one, we promise that we won't sent any spam emails
          </p>
          <p>
            This project is still in very beginning and probably there are some
            bugs, also some new design will come in near future
          </p>
        </ContentHome>
      </HomeGrid>
    </React.Fragment>
  );
};

const ContentHome = styled.div`
  @media ${device.laptop} {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  p {
    margin: 20px;
  }
`;
const HomeGrid = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 2em;
  }
`;

export default Home;
