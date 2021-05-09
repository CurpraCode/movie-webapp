import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "./navs/Hamburger";

function Header() {
  return (
      <Hom>
 <HomeHead>
      <Link to="/home">
        <h1>
          Curpra<span>Movie</span>
        </h1>
      </Link>
      <Hamburger/>
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

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
      margin-right:2rem;
  }
  @media screen and (max-width: 780px) {
 display:none;
   
  }
`;
