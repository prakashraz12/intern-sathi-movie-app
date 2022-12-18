
import React, { useContext, useEffect, useState } from "react";
const AppContex = React.createContext();
export const MOVIE_API = `http://www.omdbapi.com/?apikey=$3feffefe&s`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const[query, setQuery] = useState('avatar')
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
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
      getMovies(`${MOVIE_API}&s=${query}`);
    }, 700)
    return ()=> clearTimeout(timer)
    
  }, [query]);
  return (
    <AppContex.Provider value={{ isLoading, isError ,movie, query , setQuery}}>{children}</AppContex.Provider>
  );
};

const useGlobalContex = () => {
  return useContext(AppContex);
};

export { AppContex, AppProvider, useGlobalContex };
