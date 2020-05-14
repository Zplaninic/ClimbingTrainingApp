import React from "react";
import styled from "styled-components";
import { device } from "./../../css/device";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurger = styled.button`
  float: left;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  margin-top: 13px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 3px;
    background: #16acac;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export default Burger;
