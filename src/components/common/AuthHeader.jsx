import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AuthHeader() {
  return (
    <Up>
      <Head>
        <h1>
          <Link to="/">
            Curpra<span>Movie</span>
          </Link>
        </h1>
        <Link to="/">
          <div>
            Login
            <box-icon name="log-in" color="#fff"></box-icon>
          </div>
        </Link>
      </Head>
    </Up>
  );
}

export default AuthHeader;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0px auto;
  box-icons {
    margin-top: 0.8rem;
  }
  span {
    color: #0073ff;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(92, 90, 90, 0.331);
    border-radius: 10px;
    padding: 0.6rem;
  }
`;
const Up = styled.div`
  background-color: #0c0b0b;
`;
