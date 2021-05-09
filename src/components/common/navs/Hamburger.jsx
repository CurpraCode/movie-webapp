import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

function Hamburger() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Burger open={open} onclick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <NavLinks open={!open} />
    </>
  );
}

export default Hamburger;
const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 50px;
  z-index: 2000;
  display: none;

  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
  }
  div {
    width: 1.9rem;
    height: 0.2rem;
    border-radius: 10px;
    position: ${({ open }) => (open ? "absolute" : "unset")};
    transform: origin;
    background-color: #eaeaea;
    transition: all 0.3s linear;
    z-index: 2000 !important;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      border-radius: 10px;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: translateX(30%);
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin-top: 0px;
    }
  }
`;
