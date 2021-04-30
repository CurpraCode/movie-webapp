import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
//import styled from "styled-components";

function MovieDetails() {
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
  return (
    <div>
      <Header />
      hello
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movieSelect?.backdrop_path}`}
        alt="show"
      />
      <Footer />
    </div>
  );
}

export default MovieDetails;
