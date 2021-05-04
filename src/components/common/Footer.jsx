import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fot>
      <Foot>
        <h2>
          <Link to="/">
            Curpra<span>Movie</span>
          </Link>
        </h2>
        <nav>
          <box-icon
            type="logo"
            name="facebook"
            color="#fff"
            size="2rem"
          ></box-icon>
          <box-icon
            type="logo"
            name="twitter"
            color="#fff"
            size="2rem"
          ></box-icon>
          <box-icon
            name="youtube"
            type="logo"
            color="#fff"
            size="2rem"
          ></box-icon>
          <box-icon
            name="instagram"
            type="logo"
            color="#fff"
            size="2rem"
          ></box-icon>
        </nav>
        <p>&copy;copyright CurpraMovie, Inc. All right reserved</p>
      </Foot>
    </Fot>
  );
}

export default Footer;
const Fot = styled.div`
  background-color: rgba(36, 36, 36, 0.838);
`;
const Foot = styled.div`
  span {
    color: #0073ff;
  }
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: center;
  font-size: 20px;
  /* padding-top: 50px; */
  max-width: 1140px;
  margin: 0px auto;
  opacity: 0.9;
  box-icon {
    margin-left: 1rem;
  }
  nav{
    justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  }
  @media screen and (max-width: 398px) {
    width: 100%;
    flex-direction: column;
    padding-top: 0px;
    text-align: center;
  }
`;
