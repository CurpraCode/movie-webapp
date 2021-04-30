import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
//import styled from "styled-components";

function SeriesDetails () {
    const {id} =useParams();
    const [seriesSelect, setSeriesSelect]=useState();
    // const BASE_URL
    useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0d94f61d891c39c0d8ddc956d5ca297b`)
    .then((res)=>{
        console.log(res)
        setSeriesSelect(res.data)
    })
    }, [id])
    return (
        <div>
            <Header/>
            hello
            <img  src={`https://image.tmdb.org/t/p/w1280/${seriesSelect?.backdrop_path}`} alt="show"/> 
            <Footer/>
        </div>
    )
}

export default SeriesDetails

