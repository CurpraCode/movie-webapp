import React, { useState } from "react";
import ApiAxios from "../ApiAxios";
import Search from "./body/Search";
import MovieCardList from "./body/MovieCardList";

function Title() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await ApiAxios.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "98fd8b80" },
    });

    setState((prevState) => {
      console.log(results);
      return { ...prevState, results: results };
    });
  };

  return (
    <div>
      <h1>Shopify Movie Search and Select</h1>
      <Search onSearch={onSearch} />
      <MovieCardList results={state.results} />
    </div>
  );
}

export default Title;
