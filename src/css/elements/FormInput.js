import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;
export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 7%;
  text-align: center;
  border-style: solid;
  margin-bottom: 10px;
  margin-top: 2px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${props => (props.primary ? "red" : "#180C5C")};
`;
export const Select = styled.select`
  width: 100%;
  height: 7%;
  text-align: center;
  border-style: solid;
  margin-bottom: 10px;
  border-color: #180c5c;
  margin-top: 2px;
`;
export const Option = styled.option`
  text-align: center;
`;
