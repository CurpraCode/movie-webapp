import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
      <Hom>
 <HomeHead>
      <Link to="/home">
        <h1>
          Curpra<span>Movie</span>
        </h1>
      </Link>
      <ListNav>
        <ul>
          <Link to="/home">
            <li>
              <box-icon name="home" size="1.9rem" color="#ffffff"></box-icon>Home
            </li>
          </Link>

          <Link to="/home">
            <li>
              <box-icon name="movie-play" size="1.9rem"  color="#ffffff"></box-icon>Movies
            </li>
          </Link>
          <Link to="/Series">
            <li>
              <box-icon name="tv" size="1.9rem"  color="#ffffff"></box-icon>Series
            </li>
          </Link>
        </ul>
      </ListNav>
      <Search>
        <div>
          <box-icon name="search-alt-2" size="1.9rem"  color="#ffffff"></box-icon>
        </div>
        <div>
          <box-icon name="user-circle" size="1.9rem"  color="#ffffff"></box-icon>{" "}
        </div>
      </Search>
    </HomeHead>
      </Hom>
   
  );
}

export default Header;
const Hom =styled.div`
background-color: rgba(36, 36, 36, 0.838);
position:fixed;
top:0;
right:0;
left:0;
z-index:1000;

`
const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  max-width: 1140px;
  margin: 0px auto;
  opacity:0.9;
  h1{
      color:white;
  }
  span{
      color:#0073ff;
  }

`;
const ListNav = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
 a{
      color:white;
      text-decoration:none;
  }
  box-icon{
      margin-right:0.5rem
  }
`;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
      margin-right:2rem;
  }
`;
