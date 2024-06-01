import { useState } from 'react'
// import './App.css'

import GenreMovies from './component/GenreMovies'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './component/navbar'
import TvShow from './component/TvShow'
import Home from './component/home'
import Trending from './component/trending'
import Trendingtv from './component/trendingtv'
import MovieDetail from './component/MovieDetail'
import { Signup } from './component/LoginAndSign/Sign.jsx'
import Upcoming from './component/upcoming'

import { Login } from './component/LoginAndSign/Login'

// Batas Api
function App() {



  

  return (
    <>
    <div>
<Router>
  <Routes>
  
    
    <Route path='/movie/:id' element={<MovieDetail/>} ></Route>
    <Route path='/genre/:genreId' element={<GenreMovies/>} ></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/tvshow' element={<TvShow/>}></Route>
    <Route path='/trending' element={<Trending/>}></Route>
    <Route path='/trendingtv' element={<Trendingtv/>}></Route>
    <Route path='/upcoming' element={<Upcoming/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/SignUp' element={<Signup/>}></Route>

  </Routes>
</Router>

    </div>


    </>
  )}


export default App
