import React from 'react';
import { useFetchNowPlaying } from '../../hooks/useFetch';
import { MovieCard } from './MovieCard';

export const NowPlaying = () => {

  const { movies } = useFetchNowPlaying();
  // console.log(movies);

  return (
    <div className='animate__animated animate__fadeIn'>

      <h1 className='text-center'>En cines</h1>

      <div className='mt-4 d-flex justify-content-center flex-wrap'>
        {
          movies?.map( m => (
            <MovieCard 
              key={m.id}
              {...m} />
          ) )
        }
      </div>

    </div>
  );
}
