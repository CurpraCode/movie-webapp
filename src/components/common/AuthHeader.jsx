import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function AuthHeader() {
    return (
        <Head>
             <h1 >
          <Link to="/">Curpra<span>Movie</span></Link>
        </h1>
       
          {/* <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#movie-link">Movies</a></li>
              <li><a href="">Series</a></li>
            </ul> 
          </nav>
           <div class="search-login">
            <input type="text" placeholder="search" name="search" />
            <i class="fas fa-search"></i>
          </div> */}
  
          <Link to="/login">Login <box-icon name='log-in'></box-icon></Link>
        </Head>
    )
}

export default AuthHeader

const Head =styled.div`
display:flex;
justify-content:space-between;
`