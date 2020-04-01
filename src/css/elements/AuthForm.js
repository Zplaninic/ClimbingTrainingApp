import styled from "styled-components";

const Card = styled.div`
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
`;

const Button = styled.button`
  background: #3f85cd;
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  font-family: "Montserrat", sans-serif;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

const SocialButton = styled.button`
  width: 225px;
  margin: 0 0 50px 0;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const SocialButtonImage = styled.img`
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0 5px;
  vertical-align: middle;
`;

export {
  Form,
  Input,
  Button,
  Logo,
  Card,
  Error,
  SocialButtonImage,
  SocialButton
};
