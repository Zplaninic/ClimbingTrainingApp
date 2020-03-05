import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 25%;
  min-width: 150px;
`;
export const Input = styled.input`
  width: 100%;
  text-align: center;
  border-style: solid;
  margin-bottom: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${props => (props.primary ? "red" : "#a6a6a6")};
`;
export const Select = styled.select`
  width: 100%;
  text-align: center;
  border-style: solid;
  margin-bottom: 10px;
  border-color: "#a6a6a6";
`;
export const Option = styled.option`
  text-align: center;
`;
