import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Title from "./components/Title";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Activate from "./components/Activate";
import Home from "./components/pages/Home";
import Series from "./components/pages/Series";
import MovieDetails from "./components/pages/MovieDetails";
import SeriesDetails from "./components/pages/SeriesDetails";
import "boxicons";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/users/activate/:token">
          <Activate />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/series">
          <Series />
        </Route>
        <Route exact path="/MovieDetails/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/SeriesDetails/:id">
          <SeriesDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
