import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function SeriesDetails (props) {
    const {id} =useParams();
    const [seriesSelect, setSeriesSelect]=useState();
      const [isOpen, setOpen] = useState(false);
    // const BASE_URL

    useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0d94f61d891c39c0d8ddc956d5ca297b&append_to_response=videos`)
    .then((res)=>{
        console.log(res)
        setSeriesSelect(res.data)
    })
    }, [id])
    const Bg = seriesSelect?.backdrop_path;
    const TMDB_URL_IMG = "https://image.tmdb.org/t/p/";
    return (
        <div>
            <Header/>
            
            <BackImg bg={Bg} TMDB={TMDB_URL_IMG}>
        <Detailed>
          <Boxed>
            <h2>{seriesSelect?.name}</h2>
            <div>
            <button>
              <box-icon name="play"></box-icon>PLAY
            </button>
              <div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={seriesSelect?.videos.results[0].key}
                  onClose={() => setOpen(false)}
                />
                <button onClick={() => setOpen(true)}>
                  <box-icon name="play"></box-icon>TRAILER
                </button>
              </div>
           
            <Buttoned>
              <box-icon name="plus"></box-icon>
            </Buttoned>
            </div>
          </Boxed>
          <Seged>
            <h2>{seriesSelect?.name}</h2>
            <p>{seriesSelect?.overview}</p>
          </Seged>
        </Detailed>
      </BackImg>
            <Footer/>
        </div>
    )
}

export default SeriesDetails;


const BackImg = styled.div`
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

const Detailed = styled.div`
  max-width: 1140px;
  margin: 0px auto;
  padding-top: 7rem;
`;
const Boxed = styled.div`
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
const Seged = styled.div``;

const Buttoned=styled.div`
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
