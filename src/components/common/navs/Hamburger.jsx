import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
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
  display: none;

  @media screen and (max-width: 780px) {
    width: 2rem;
  height: 2rem;
  position: fixed;
  /* top: 15px; */
  right: 20px;
    z-index: 50 !important;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
  }
  div {
    width: 1.9rem;
    height: 0.2rem;
    border-radius: 10px !important;
    position: ${({ open }) => (open ? "absolute" : "unset")} !important;
    transform: origin !important;
    background-color: #eaeaea;
    transition: all 0.3s linear;


    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")} !important;
      border-radius: 10px;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")} !important;
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: translateX(10%) !important;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")} !important;
      margin-top: 0px;
      
    }
  }
`;
