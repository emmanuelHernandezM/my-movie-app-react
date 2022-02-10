
const api_key = `54a33308b8ae93d789684e6bfa325c6c`;
const lan = `es-MX`;

// Ahora en Cines
export const now_playing = async () => {

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=${lan}&page=1`;

    const resp = await fetch(url);
    const { results } = await resp.json();

    const now_movies = results.map( movie => {
        return {
            ...movie
        }
    })
    return now_movies;
}

// Populares
export const popular = async () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${lan}&page=1`;

    const resp = await fetch(url);
    const { results } = await resp.json();

    const popular_movies = results.map( movie => {
        return {
            ...movie
        }
    })
    return popular_movies;
}

// GetMovieById
export const movieById = async ( id ) => {

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${lan}&page=1`;

    const resp = await fetch(url);
    const movie = await resp.json();

    return movie;
}