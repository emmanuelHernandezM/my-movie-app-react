import { useEffect, useState } from "react";
import { movieById, now_playing, popular } from "../helpers/moviesApi";

export const useFetchNowPlaying = () => {

    const [movies, setMovies] = useState({});

    useEffect( () => {

        now_playing()
            .then( movies => {
                setMovies({movies});
            });

    }, [setMovies] );

    return movies;
}

export const useFetchPopular = () => {

    const [movies, setMovies] = useState({});

    useEffect( () => {

        popular()
            .then( movies => {
                setMovies({movies});
            });

    }, [setMovies] );

    return movies;
}

export const useFetchMovieId = ( id ) => {

    const [movie, setMovie] = useState({});

    useEffect( () => {

        movieById( id )
            .then( movie => {
                setMovie(movie)
            } )

    }, [setMovie] );

    return movie;
}