import React from "react";
import styled from "styled-components";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div>
      <p>{movie?.Title}</p>
      <p>{movie?.Year}</p>
      <ImageBox>
        <img src={movie?.Poster} alt="omdb img" />
      </ImageBox>

      <Button>Nominate</Button>
    </div>
  );
}
const Button = styled.button`
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  background-color: #1ec3f5;
  border: 0px;

  :focus {
    outline: none;
  }
`;
const ImageBox = styled.div`
  img {
    width: 10%;
  }
`;
export default MovieCard;
