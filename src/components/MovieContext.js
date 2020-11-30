import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();



export const MovieState = ({ children }) => {


    const [hiddenMenu, setHiddenMenu] = useState(true);

    const [activeMenu, setActiveMenu] = useState("Popular")

    const[movies, setMovies] = useState([]);

    const [search, setSearch] = useState(""); 

    const [currentPage, setCurrentPage] = useState(1);

    const [series, setSeries] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [showPage, setShowPage] = useState(true);
     
    const getPopularMovie = async() => {

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&language=en-US&page=3`;

        const res = await fetch(url);
        const data = await res.json();
         setMovies(data.results);


    }; 

    const searchMovies = async() => {

        const response =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&language=en-US&page=${currentPage}`);

        const movieData = await response.json();

        if (search.trim() === "" ){
            setSeries(movieData.results);
            
        }
 

    };


    const handleChange = async(e) => {
        e.preventDefault();

        if(search.trim() === "" )
            return;

            const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&query=${search}&language=en-US&page=${currentPage}`)

            const searchData = await searchResponse.json();
            setSeries(searchData.results);
            setShowPage(false);


    }

    const newPage = (direction) => {
        if(direction === "next"){
            setCurrentPage(prevCurrent => prevCurrent + 1);
            setIsLoading(true);
        }
        else if(direction === "previous" && currentPage !== 1){
            setCurrentPage(prevCurrent => prevCurrent - 1);
        }

    }

    useEffect(() =>{
        getPopularMovie();
    }, []);
    

    useEffect(() =>{
        if(search.trim() === ""){
            setShowPage(true); 
        }
        searchMovies();
    }, [search,currentPage]);

    
    useEffect(() =>{
       const setTime = setTimeout(() => {
         setIsLoading(false);
       }, 1300)
       return () => clearTimeout(setTime);
    }, [series,currentPage]);
    
   return (
      <MovieContext.Provider value={{hiddenMenu, setHiddenMenu, activeMenu, setActiveMenu, movies, search, setSearch, currentPage, setCurrentPage, series, setSeries, getPopularMovie, searchMovies, handleChange, isLoading, setIsLoading, showPage, setShowPage, newPage}}>
          {children}
      </MovieContext.Provider>
   );
};