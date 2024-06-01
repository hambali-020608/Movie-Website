import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import { useEffect } from 'react'
import NavBar from './navbar'
import { Search } from './Search'
import { Card } from './Card'
import {Swiper,SwiperSlide} from "swiper/react";
import { Header } from './Header'
import 'swiper/css'

AOS.init()

const filmUrl="https://api.themoviedb.org/3"
const film = "https://image.tmdb.org/t/p/w500"
const Api= 'a2c6f1a3c870a652629f1425e33dc128'



const movieList = async () => {
  try {
    const response = await axios.get(`${filmUrl}/trending/tv/day?api_key=${Api}`)
    return response.data.results
  } catch (error) {
    console.error("Error fetching popular movies:", error)
    return []
  }
}



const searchMovie=async(q)=>{
 const search=await axios.get(`${filmUrl}/search/tv?query=${q}&api_key=${Api}`)
 return search.data 
}

// Batas Api
function Trendingtv() {
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
      console.log(movie)
      const modalId = `movieModal-${movie.id}`; // Unique modal ID based on movie ID
      return (
        <Card
          title={movie.name}
          id={movie.id}
          img={`${film}/${movie.poster_path}`}
          realese={movie.first_air_date}
          modal={modalId}
          overview={movie.overview}
        />
        
      );
    });
  };
  


  const search = async(q)=>{
    if(q.length>3){
    const query= await searchMovie(q)
      setPopularMovies(query.results)
console.log({query:query})
  }
  }
  const cari= ()=>{
    const target=document.getElementById("tv")
    search(target.value)
  }
  
  return (
    <>
    <Header><h5 className='float-start me-5'>Cari Trending Movies disini</h5><Search/></Header>
            
    
{/* <Coro /> */}
     <div className='row'>
     <Swiper
      spaceBetween={10}
      slidesPerView={8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {popularMovies.map((movie)=>{
        return(
          <>
          <SwiperSlide>
            <div className="row"  >           
               <img src={`${film}/${movie.poster_path}`}  id='trendingtv'/>
        
          </div>
          



             </SwiperSlide>
         
          </>
        )
      })}
    
    </Swiper>

</div>

<script>
  
  </script>      
    </>
  )}


export default Trendingtv
