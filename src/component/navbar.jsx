import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import TvShow from "./TvShow";
import Home from "./home";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { fromJSON } from "postcss";

import { Search } from "./Search";

const filmUrl = "https://api.themoviedb.org/3";
const film = "https://image.tmdb.org/t/p/w500";
const Api = "a2c6f1a3c870a652629f1425e33dc128";
const genre = "https://api.themoviedb.org/3/genre/movie/list";
const GenreList = async () => {
  try {
    const response = await axios.get(
      `${filmUrl}/genre/movie/list?api_key=${Api}`
    );
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

function NavBar({ props, children }) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [trending, setTrending] = useState("#");
  const [Genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      const Genre = await GenreList();
      setGenre(Genre);
    };
    fetchGenre();
  }, []);
  const Genrenya = (props) => {
    return Genre.map((genre) => {
      return (
        <li key={genre.id} className={props.kelas}>
          <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
        </li>
      );
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container text-white">
          <a className="navbar-brand text-white" href="/">
            Hambali Movies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3">
              <li className="nav-item text-white">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/upcoming">
                  Upcoming
                </Link>
              </li>

              <li className="nav-item">
                <button
                  className="navbar-toggler m"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className="btn btn-dark dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Trending
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link className="dropdown-item" to="/trending">
                            Movies
                          </Link>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#trendingtv"
                            onClick={() => {
                              setTrending("#trendingtv");
                            }}
                          >
                            Tv shows
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>

                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <button
                  className="navbar-toggler ms-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                
                </div>
              </li>
              <li className=""><Link to='/signup' className="nav-link text-white">Sign up</Link></li>

            </ul>
            <ul className="navbar-nav ms-auto">
              {" "}
              <li className="nav-item">{children}</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
