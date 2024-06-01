import { useState } from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "./navbar";
import TvShow from "./TvShow";
import { Header } from "./Header";
import { Card } from "./Card";
import {Swiper,SwiperSlide} from "swiper/react";
import { Search } from "./Search";
import 'swiper/css'
import Trendingtv from "./trendingtv";

import { Link } from "react-router-dom";



AOS.init();

const filmUrl = "https://api.themoviedb.org/3";
const film = "https://image.tmdb.org/t/p/w500";
const Api = "a2c6f1a3c870a652629f1425e33dc128";
const genre = "https://api.themoviedb.org/3/genre/movie/list";

const movieList = async () => {
  try {
    const response = await axios.get(`${filmUrl}/movie/popular?api_key=${Api}`);
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
function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await movieList();
      setPopularMovies(movies);
    };
    fetchPopularMovies();
  }, []);

  // 
  const PopularMovieList = () => {
    return popularMovies.map((movie) => {
      console.log(movie);
      //  // Unique modal ID based on movie ID
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
  const cari = () => {
    const tombol = document.getElementById("halo");
    search(tombol.value);
  };

  

  return (
    <>
    
      <NavBar><Search klik={cari}/></NavBar>
      
      <Swiper
                spaceBetween={50}
        slidesPerView={1}
      >
        {popularMovies.map((movie) => (
         console.log(movie),
          <SwiperSlide key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
          
            <img className="banner" src={`${film}/${movie.poster_path}`}/> 
              {/* Konten lain jika ada */}
            
          </Link>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="m-lg-5 ">
        <Header ><span className="float-start me-5">Cari Popular Movies disini</span><Search klik={cari}/></Header>
        <div className="container">
        
        </div>

        <div className=""> 
        
        <Swiper
      spaceBetween={10}
      slidesPerView={9}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {popularMovies.map((movie)=>{
        return(
          <>

          <SwiperSlide key={movie.id}>
            <div className="row"  data-aos="flip-right" data-aos-duration="1000">
          <Link to={`/movie/${movie.id}`} >
            <img src={`${film}/${movie.poster_path})`} alt="" className="banner2"/>
            
        
          </Link>
          </div>
        </SwiperSlide>
         
          </>
        )
      })}
    
    </Swiper>
        </div>
        
      </div>
      
      <div className="row m-4">

<Trendingtv/>

      </div>
    </>
  );
}

export default Home;
