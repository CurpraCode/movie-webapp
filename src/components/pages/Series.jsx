import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Series() {
  const [current, setCurrent] = useState([]);
  const [tv, setTv] = useState([]);
  const [air, setAir] = useState([]);
  // top rated api call
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res.data);
        setCurrent(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  // tv api call
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res.data);
        setTv(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  // airing api call
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=0d94f61d891c39c0d8ddc956d5ca297b`
      )
      .then((res) => {
        console.log(res.data);
        setAir(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <MovieRow>
        <p>
          {" "}
          <box-icon
            name="trending-up"
            animation="tada"
            color="#fff"
            size="md"
          ></box-icon>
          Trending
        </p>
        <hr />
        <MovieSet>
          {current.map((currents) => {
            return (
              <MovieShape key={currents.id}>
                <Link to={`/SeriesDetails/` + currents.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${currents.poster_path}`}
                    alt="movie pic"
                  />
                </Link>

                <h4>{currents.name}</h4>
                <p>
                  {currents.first_air_date}
                  <span>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#ffe70d"
                    ></box-icon>
                    {currents.vote_count}
                  </span>
                </p>
              </MovieShape>
            );
          })}
        </MovieSet>

        <p>
          {" "}
          <box-icon
            name="tv"
            animation="tada"
            color="#fff"
            size="md"
          ></box-icon>
          On Air{" "}
        </p>
        <hr />
        <MovieSet>
          {tv.map((Tvs) => {
            return (
              <MovieShape key={Tvs.id}>
                <Link to={`/SeriesDetails/` + Tvs.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${Tvs.poster_path}`}
                    alt="movie pic"
                  />
                </Link>

                <h4>{Tvs.name}</h4>
                <p>
                  {Tvs.first_air_date}
                  <span>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#ffe70d"
                    ></box-icon>
                    {Tvs.vote_count}
                  </span>
                </p>
              </MovieShape>
            );
          })}
        </MovieSet>

        <p>
          <box-icon
            name="youtube"
            size="md"
            type="logo"
            color="#fff"
            animation="tada"
          ></box-icon>
          Airing Today
        </p>
        <hr />
        <MovieSet>
          {air.map((Airs) => {
            return (
              <MovieShape key={Airs.id}>
                <Link to={`/SeriesDetails/` + Airs.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${Airs.poster_path}`}
                    alt="movie pic"
                  />
                </Link>

                <h4>{Airs.name}</h4>
                <p>
                  {Airs.first_air_date}
                  <span>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#ffe70d"
                    ></box-icon>
                    {Airs.vote_count}
                  </span>
                </p>
              </MovieShape>
            );
          })}
        </MovieSet>
      </MovieRow>
      <Footer />
    </div>
  );
}

export default Series;
const MovieRow = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin: 0px auto;
  margin-top: 6rem;
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
  @media screen and (max-width: 399px) {
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
