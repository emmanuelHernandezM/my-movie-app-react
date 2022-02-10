import React from 'react'
import { Link } from 'react-router-dom';

export const MovieCard = (movie) => {

  const {id, title, poster_path} = movie; 
  const img = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link 
        to={`movie/${id}`}
        className="card movie-card mb-3 ms border">
        <img 
            src={img} 
            className="card-img-top" alt={id}/>
        <div className="card-body text-justify">
            <h5 className="card-title text-warning">{title}</h5>
        </div>
    </Link>
  )
}
