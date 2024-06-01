import { useState } from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "./navbar";
import { Header } from "./Header";
import { Search } from "./Search";
import { Card } from "./Card";

AOS.init();

const filmUrl = "https://api.themoviedb.org/3";
const film = "https://image.tmdb.org/t/p/w500";
const Api = "a2c6f1a3c870a652629f1425e33dc128";

const movieList = async () => {
  try {
    const response = await axios.get(
      `${filmUrl}/trending/movie/day?api_key=${Api}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

const searchMovie = async (q) => {
  const search = await axios.get(
    `${filmUrl}/search/movie?query=${q}&api_key=${Api}`
  );
  return search.data;
};

// Batas Api
function Trending() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await movieList();
      setPopularMovies(movies);
    };
    fetchPopularMovies();
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie) => {
      console.log(movie);
      const modalId = `movieModal-${movie.id}`; // Unique modal ID based on movie ID
      return (
        <Card
          title={movie.title}
          id={movie.id}
          img={`${film}/${movie.poster_path}`}
          realese={movie.release_date}
          modal={modalId}
          overview={movie.overview}
        />
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      console.log({ query: query });
    }
  };

  const cari = ()=>{
    const target=document.getElementById("halo")
    search(target.value)
  }

  return (
    <>
     

       

       
        <div className="row">
          <PopularMovieList />
        </div>
      
    
    </>
  );
}

export default Trending;
