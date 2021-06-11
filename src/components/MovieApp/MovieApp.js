import React, { useState } from "react";
import "../../App.css";
import { MoviesList } from "../MoviesList/MoviesList";
import { SearchMovie } from "../SearchMovie/SearchMovie";
import { Add } from "../Add/Add";

const MovieApp = ({ setMoviesList, moviesList }) => {
    const [nameSearch, setNameSearch] = useState("");

    const [ratingSearch, setRatingSearch] = useState(0);

    const addMovie = (newMovie) => {
        setMoviesList([...moviesList, newMovie]);
    };

    return (
        <div className="container-movies">
            <SearchMovie
                setNameSearch={setNameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}
            />

            <MoviesList
                moviesList={moviesList}
                ratingSearch={ratingSearch}
                nameSearch={nameSearch}
            />

            <div className="addmovie">
                <Add addMovie={addMovie} />
            </div>
        </div>
    );
};

export default MovieApp;