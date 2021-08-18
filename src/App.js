import React from "react";
import "./App.css";
import requests from "./requests";
import Rows from "./Rows";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Rows
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Rows title="TRENDING NOW" fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Rows title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
