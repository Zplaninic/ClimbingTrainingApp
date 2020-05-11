import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgb(12, 12, 12);

  /* width: 80%;
  margin-left: 10%;
  margin-right: 10%; */
`;
export const Input = styled.input`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  height: calc(1.5em + .875rem + 2px);
  padding: .4375rem .75rem;
  font-size: .75rem;
  line-height: 1.5;
  color: #2d353c;
  background-color: #fff;
  border: 1px solid #d5dbe0;
  border-radius: 4px;
  /* border-color: ${props => (props.primary ? "red" : "#180C5C")};  */
`;
export const Select = styled.select`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  height: calc(1.5em + 0.875rem + 2px);
  padding: 0.4375rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #2d353c;
  background-color: #fff;
  border: 1px solid #d5dbe0;
  border-radius: 4px;
`;
export const Option = styled.option`
  text-align: center;
`;
