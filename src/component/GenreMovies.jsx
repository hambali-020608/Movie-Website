import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GenreMovies = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Api}&with_genres=${genreId}`);
      setMovies(response.data.results);
    };

    fetchMoviesByGenre();
  }, [genreId]);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovies;