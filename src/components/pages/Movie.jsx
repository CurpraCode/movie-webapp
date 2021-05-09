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
        setRate(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MovieRow>
      <p>
        <box-icon
          type="solid"
          animation="tada"
          size="md"
          name="hot"
          color="#fff"
        ></box-icon>{" "}
        Latest
      </p>
      <hr />
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

      <p>
        <box-icon
          name="plus"
          size="md"
          animation="tada"
          color="#fff"
        ></box-icon>
        Upcoming
      </p>
      <hr />
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

      <p>
        <box-icon
          name="star"
          type="solid"
          size="md"
          animation="tada"
          color="#fff"
        ></box-icon>{" "}
        Top Rated
      </p>
      <hr />
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
  p {
    font-size: 1.6rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  box-icon {
    margin-right: 5px;
  }
`;
const MovieSet = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: center;
  margin-top: 30px;
  @media screen and (max-width:399px) {
    flex-flow: column !important;
  }
`;

const MovieShape = styled.div`
  width: 200px;
  margin-bottom: 30px;
  img {
    width: 100%;
    margin-bottom: 10px;
    opacity: 1;
    display: block;
    border-radius: 0.8rem;
    /* transition: 0.5s ease; */
    backface-visibility: hidden;
  }
  h4 {
    margin-bottom: 0rem;
    font-size: 0.8rem;
  }
  p {
    display: flex;
    align-items: center;
    margin-right: 0.3rem;
    font-size: 0.7rem;
  }
  span {
    display: flex;
    align-items: center;
    color: #ffe70d;
    margin-left: 0.5rem;
  }
  img:hover {
    border: 2px solid rgba(45, 125, 245, 0.804);
    transition: 0.2s ease-in;
    opacity: 0.8;
    transform: scale(1.02);
  }
`;
