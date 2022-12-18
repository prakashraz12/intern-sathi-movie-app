import React from "react";
import "../style/Movie.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContex } from "../contexApi/Contex";

const Movie = () => {
  const { movie, isLoading } = useGlobalContex();
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading.....</h1>
      </div>
    );
  }
  return (
    <section className="movie__page">
      <h1 className="text-center"></h1>
      <motion.div
        transition={{ deley: 1.1 }}
        className=" container grid grid__page"
      >
        {movie.map((currElm) => {
          const { imdbID, Title, Poster, Type } = currElm;
          const movieName = Title.substring(0, 16);
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <motion.div whileHover={{ scale: 0.9 }} className="card">
                <div className="card__info">
                  <h2>
                    {movieName.length >= 16 ? `${movieName}...` : movieName}
                  </h2>
                  <img src={Poster} alt="" />
                  <p>Category: {Type}</p>
                </div>
              </motion.div>
            </NavLink>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Movie;
