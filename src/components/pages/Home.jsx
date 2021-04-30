import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Movie from "./Movie";

function Home() {
  let settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Header />
      <Carousel {...settings}>
        <Img>
          <img
            id="set"
            src="https://media.agonybooth.com/wp-content/uploads/2018/11/15213715/warcraft-2016-a-recap-part-1-splash-720x340.jpg"
            alt=""
          />
        </Img>

        <Img>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/46B428B48739ED520A3ED05C60E048ADA6FC0BCC2DB2B2F897092C466BF6F5FA/scale?width=1440&aspectRatio=3.91&format=jpeg"
            alt=""
          />
        </Img>

        <Img>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg"
            alt=""
          />
        </Img>

        <Img>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE1A5A21FD503240A3D781CB05A17B528318E8429D879BCC42BFEBD644EF9C54/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391"
            alt=""
          />
        </Img>
      </Carousel>
      <Movie/>
      <Footer />
    </div>
  );
}

export default Home;

const Carousel = styled(Slider)`
  & > button {
    display: none !important;
  }
`;

const Img = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    right: 0;
    height: 30%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.014) 50%,
        rgba(3, 133, 255, 0.377) 100%
      )
      70%;
  }
  #set {
    height: 50vh;
  }
  img {
    width: 100%;
  }
`;
