import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a2c6f1a3c870a652629f1425e33dc128`);
      setMovie(result.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" style={{width:'89%',height:'35rem', position:'absolute',left:'5rem' }} className='align-items-center justify-content-center d-flex' />
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='ms-5'alt={movie.title} style={{width:'15rem', position:'relative', top:'17rem', left:'4.5rem'}}/>
      <h1  className='text-white ' style={{position:'relative', left:"24rem", bottom:"5rem"}}>{movie.title}</h1>
      <p className="text-white"style={{position:'relative', maxWidth:'30rem',whiteSpace:'pre-wrap', left:'24rem'}}>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;