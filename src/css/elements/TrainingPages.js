import styled from "styled-components";
import { device } from "./../device";

export const HomeTraining = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1em;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    grid-gap: 3em;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  margin-left: 10%;
`;

export const RemoveButton = styled.button`
  background-color: #ae493f;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 2px 4px;
  color: #ffffff;
  font-size: 0.8em;
  cursor: pointer;
  margin-bottom: 0.8em;
`;

export const InputData = styled.input`
  width: 60%;
  min-height: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #180c5c;
  font-size: 0.7em;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
`;

export const InputNames = styled.div`
  width: 40%;
  min-height: 9px;
  font-size: 0.7em;
  margin-bottom: 5px;

  @media ${device.laptop} {
    width: 30%;
  }
`;

export const Exercise = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: #106ba3;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
`;

export const SectionForm = styled.section`
  padding-bottom: 4em;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: block;
`;

export const Label = styled.label`
  font-size: 0.8em;
  padding-left: 5px;
  font-weight: bold;
  color: #b41869;
`;

export const Legend = styled.legend`
  text-align: center;
  padding-bottom: 4px;
  font-weight: bold;
  color: #002962;
  font-size: 1.2em;
`;
