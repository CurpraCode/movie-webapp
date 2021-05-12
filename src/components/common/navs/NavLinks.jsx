import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NavLinks({ open }) {
  return (
    <div>
      <ListNav open={open}>
        <ul open={open}>
          <Link to="/home">
            <li>
              <box-icon name="home" size="1.9rem" color="#ffffff"></box-icon>
              Home
            </li>
          </Link>

          <Link to="/home">
            <li>
              <box-icon
                name="movie-play"
                size="1.9rem"
                color="#ffffff"
              ></box-icon>
              Movies
            </li>
          </Link>
          <Link to="/Series">
            <li>
              <box-icon name="tv" size="1.9rem" color="#ffffff"></box-icon>
              Series
            </li>
          </Link>
          <Boxed>
            <box-icon
              name="search-alt-2"
              size="1.9rem"
              color="#ffffff"
            ></box-icon>
          </Boxed>
          <Boxed>
            <box-icon
              name="user-circle"
              size="1.9rem"
              color="#ffffff"
            ></box-icon>{" "}
          </Boxed>
        </ul>
      </ListNav>
    </div>
  );
}

export default NavLinks;
const ListNav = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 780px) {
    ul {
      background-color: rgba(36, 36, 36, 0.838);
      flex-flow: column nowrap;
      position: fixed;
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      top: 29;
      right: 0;
      width: 250px;
      height: 100vh;
      padding-top: 0.3rem;
      transition: transform 0.3s ease-in-out;
      justify-content: flex-start;
    }
  }
  @media screen and (max-width: 780px) {
    li {
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      justify-content: flex-start;
    }
  }
  li {
    display: flex;
    align-items: center;
    margin-left: 1.9rem;
    list-style-type: none;
    letter-spacing: 0.3rem;
    /* color:white; */
    /* padding-left:0.9rem; */
  }
  a {
    color: white;
    text-decoration: none;
  }
  box-icon {
    margin-right: 0.5rem;
  }
`;
const Boxed = styled.div`
  @media screen and (min-width: 780px) {
    display: none;
  }
  @media screen and (max-width: 780px) {
    margin-top: 3.5rem;
  }
`;
