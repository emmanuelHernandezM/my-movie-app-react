import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFetchMovieId } from '../../hooks/useFetch';

export const MovieDetail = () => {

  const { movieId } = useParams();
  const movie = useFetchMovieId(movieId);

  const history = useHistory();

  const { 
    id,
    original_title,
    overview, 
    poster_path,
    release_date,
    vote_average } = movie;

  const img1 = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const handleBack = () => {
    history.goBack();
  }
  
  return (
    <div className='container-fluid animate__animated animate__fadeIn'>

      <div className='row mb-5'>

        <div className='col-12 mb-5 mt-3'>

          <button 
            className='btn btn-outline-primary btn-sm'
            onClick={ handleBack }>
            <i className="fa-solid fa-angle-left me-2"></i>
            Regresar
          </button>

        </div>

        <div className='col-sm-12 col-md-5 text-center'>
          <img 
            src={img1} 
            alt={id}
            className='border rounded movie-img-detail'/>
        </div>

        <div className='col-sm-12 col-md-7'>

          <p className='mt-5 fs-1 fw-bold fst-italic'> 
            {original_title}
          </p>

          <p> 
            <i className="fa-solid fa-calendar me-2 text-info"></i>
            {release_date} 
          </p>

          <p> 
            <i className="fa-solid fa-star me-2 text-warning"></i>
            {vote_average} 
          </p>

          <p className='justify'> 
            {overview} 
          </p>

        </div>

      </div>
    </div>
  );
}
