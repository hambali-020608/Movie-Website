import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import { useEffect } from 'react'
import NavBar from './navbar'


AOS.init()

const filmUrl="https://api.themoviedb.org/3"
const film = "https://image.tmdb.org/t/p/w500"
const Api= 'a2c6f1a3c870a652629f1425e33dc128'



const movieList = async () => {
  try {
    const response = await axios.get(`${filmUrl}/movie/upcoming?api_key=${Api}`)
    return response.data.results
  } catch (error) {
    console.error("Error fetching popular movies:", error)
    return []
  }
}



const searchMovie=async(q)=>{
 const search=await axios.get(`${filmUrl}/search/movie?query=${q}&api_key=${Api}`)
 return search.data 
}

// Batas Api
function Upcoming() {
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
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12  ' key={movie.id}  >
          <div className="card bg-dark bg-gradient text-white" style={{ marginBottom: '20px' }} data-aos="flip-right" data-aos-duration='1000'>
            <img src={`${film}/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
            <div className="card-body ">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.release_date}</p>
              <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Details</a>
            </div>
          </div>

          <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={`${modalId}Label`}>{movie.title}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={`${film}/${movie.poster_path}`} alt="" className="img-fluid" />
                      </div>
                      <div className="col-md">
                        <ul className="list-group">
                          <li className="list-group-item"><h4>{movie.title}</h4>{movie.release_date}</li>
                          <li className="list-group-item">{movie.overview}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      );
    });
  };
  const Coro=()=>{
    return(
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride='carousel'>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`https://image.tmdb.org/t/p/w500/raNbLci95MJ3L3dMnG7L7bD37lY.jpg?api_key=${Api}`} className="d-block w-50" />
    </div>
    <div className="carousel-item">
      <img src={`https://image.tmdb.org/t/p/w500/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg?api_key=${Api}`} className="d-block w-50" />
    </div>
    <div className="carousel-item">
      <img src={`https://image.tmdb.org/t/p/w500//ilK1JRbMjo4sMJtNKLOKnqRf1RH.jpg?api_key=${Api}`}className="d-block w-50" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
)
  }


  const search = async(q)=>{
    if(q.length>3){
    const query= await searchMovie(q)
      setPopularMovies(query.results)
console.log({query:query})
  }
  }
  

  return (
    <>
              <div>
            
              </div>
    <NavBar/>
<h1 align='center' className='text-white'>Hambali movies</h1>

<div className='container'>
<div className="row">
    <div className="">
        <div className="input-group mb-3">
  <input type="text" className="form-control input-keyword" id="halo"placeholder="Cari Film..." aria-label="Recipient's username" aria-describedby="button-addon2"/>

  <button className="btn btn-primary" type="button" onClick={()=>{const tombol = document.getElementById('halo')
   search(tombol.value)}} >Cari</button>
</div>
    </div>
</div>
</div>

{/* <Coro /> */}
     <div className='row' >

<PopularMovieList/>
</div>
<script>
  
  </script>      
    </>
  )}


export default Upcoming