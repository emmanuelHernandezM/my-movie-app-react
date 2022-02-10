import React from 'react'
import { useFetchPopular } from '../../hooks/useFetch';

import { MovieCard } from './MovieCard';

export const Populars = () => {

  const { movies } = useFetchPopular();
  
  return (
    <div className='animate__animated animate__fadeIn'>

      <h1 className='text-center'>Populares</h1>

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
  )
}
