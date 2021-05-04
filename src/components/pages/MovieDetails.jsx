import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

function MovieDetails(props) {
  const { id } = useParams();
  const [movieSelect, setMovieSelect] = useState();

  // const BASE_URL
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res);
        setMovieSelect(res.data);
      });
  }, [id]);
  const Bg = movieSelect?.backdrop_path;
  const TMDB_URL_IMG = "https://image.tmdb.org/t/p/";
  return (
    <div>
      <Header />
      <Backdrop bg={Bg} TMDB={TMDB_URL_IMG}>
        <Detail>
          <Box>
            <h2>{movieSelect?.title}</h2>
            <div>
            <button>
              <box-icon name="play"></box-icon>PLAY
            </button>
            <button>
              <box-icon name="play"></box-icon>TRAILER
            </button>
            <Button>
              <box-icon name="plus"></box-icon>
            </Button>
            </div>
          </Box>
          <Seg>
            <h2>{movieSelect?.title}</h2>
            <p>{movieSelect?.overview}</p>
          </Seg>
        </Detail>
      </Backdrop>
      <Footer />
    </div>
  );
}

export default MovieDetails;

const Backdrop = styled.div`
  background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.014) 50%,
        rgba(3, 133, 255, 0.377) 100%
      )
      50% / cover no-repeat,
    url(${(props) => `${props.TMDB}/w1280${props.bg}`});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  margin-top: 5.4rem;
`;

const Detail = styled.div`
  max-width: 1140px;
  margin: 0px auto;
  padding-top: 7rem;
`;
const Box = styled.div`
div{
  display:flex;
  margin-right:1rem;
  /* justify-content:space-evenly; */
}
h2{
  font-size:3.8rem;

}
  button {
    background-color: #fff;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content:space-evenly;
    border:0px;
    border-radius:0.4rem;
    margin-right:1rem;
    padding:0.2rem 0.9rem;
  }
  button:focus {
    outline: none;
  }
`;
const Seg = styled.div``;

const Button=styled.div`
 background-color: transparent;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content:space-evenly;
    border:2px solid #fff;
    border-radius:2rem;
    margin-right:1rem;
    padding:0.7rem;
`