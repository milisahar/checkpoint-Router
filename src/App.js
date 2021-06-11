import { useState } from 'react'

import { moviesData } from "./components/moviesData"
import { Route } from "react-router-dom";
import MovieApp from "./components/MovieApp/MovieApp";
import { MovieDesc } from "./components/MovieDescription/MovieDesc";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);


  return (
    <div className="App" >
      <Route
        exact
        path="/"
        render={() => (
          <MovieApp moviesList={moviesList} setMoviesList={setMoviesList} />
        )}
      />

      <Route
        exact
        path="/description/:movieId"
        render={(props) => <MovieDesc moviesList={moviesList} {...props} />}
      />

    </div>
  );
}

export default App;
