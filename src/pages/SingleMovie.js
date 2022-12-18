import React,{useEffect, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {MOVIE_API } from '../contexApi/Contex'
import '../style/SingleMoviePage.css'
import { motion } from 'framer-motion'


const SingleMovie = () => {
    const {id} = useParams()
    const [isLoading, setIsLoading,  setIsError] = useState(true);
const [movie, setMovie] = useState('');
const getMovies = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.Response === "True") {
      setIsLoading(false);
      setMovie(data);
    } else {
      setIsError({
        show: false,
        msg:'',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
 let timer = setTimeout(()=>{
    getMovies(`${MOVIE_API}&i=${id}`);
  }, 700)
  return ()=> clearTimeout(timer)
  
}, [id]);
if(isLoading){
  return(
    <div className="movie-sec">
      <div className="loading"><h1>Loading....</h1></div>
    </div>
  )
}
  return (
  <section className='movie__Singlepage'>
    <div className="movie__card">
      <img src={movie.Poster} alt="" />
      <div className="info">
        <h2>{movie.Title}</h2>
        <p>Realesed year: {movie.Released}</p>
        <p>Genre: {movie.Genre}</p>
        <p>IMBD rating : {movie.imdbRating} / 10</p>
        <p>Country: {movie.Country}</p>
        <p>Actors / Actress : {movie.Actors}</p>
       <p>Langauge: {movie.Language}</p>
        <p>Awards : {movie.Awards}</p>
        <p>Plot: <br />{movie.Plot}</p>
        <motion.button  whileHover={{scale:0.9}} className='back-btn'><NavLink to="/"><i class="ri-arrow-left-circle-fill"></i>Go back</NavLink></motion.button>

      </div>
    </div>
  </section>
  )
}

export default SingleMovie