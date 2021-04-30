import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie() {
  const [show, setShow] = useState([]);
  const [upcome, setUpcome] = useState([]);
  const [rate, setRate] = useState([]);
  // now play api call
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res.data);
        setShow(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  //upcoming api call
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res.data);
        setUpcome(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  // top rated api call
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res.data);
        setRate(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MovieRow>
      <p>Latest</p>
      <MovieSet>
        {show.map((shows) => {
          return (
            <MovieShape key={shows.id}>
              <Link to={`/MovieDetails/` + shows.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${shows.poster_path}`}
                  alt="movie pic"
                />
              </Link>

              <h4>{shows.title}</h4>
              <p>
                {shows.release_date}
                <span>
                  <box-icon name="star" type="solid" color="#ffe70d"></box-icon>
                  {shows.vote_count}
                </span>
              </p>
            </MovieShape>
          );
        })}
      </MovieSet>

      <p>Latest</p>
      <MovieSet>
        {upcome.map((upcomes) => {
          return (
            <MovieShape key={upcomes.id}>
              <Link to={`/MovieDetails/` + upcomes.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${upcomes.poster_path}`}
                  alt="movie pic"
                />
              </Link>

              <h4>{upcomes.title}</h4>
              <p>
                {upcomes.release_date}
                <span>
                  <box-icon name="star" type="solid" color="#ffe70d"></box-icon>
                  {upcomes.vote_count}
                </span>
              </p>
            </MovieShape>
          );
        })}
      </MovieSet>

      <p>Top Rated</p>
      <MovieSet>
        {rate.map((rated) => {
          return (
            <MovieShape key={rated.id}>
              <Link to={`/MovieDetails/` + rated.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${rated.poster_path}`}
                  alt="movie pic"
                />
              </Link>

              <h4>{rated.title}</h4>
              <p>
                {rated.release_date}
                <span>
                  <box-icon name="star" type="solid" color="#ffe70d"></box-icon>
                  {rated.vote_count}
                </span>
              </p>
            </MovieShape>
          );
        })}
      </MovieSet>
    </MovieRow>
  );
}

export default Movie;

const MovieRow = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin: 0px auto;
`;
const MovieSet = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: center;
  margin-top: 30px;
`;

const MovieShape = styled.div`
  width: 200px;
  margin-bottom: 30px;
  img {
    width: 100%;
    margin-bottom: 10px;
    opacity: 1;
    display: block;
    border-radius: 1rem;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
`;
