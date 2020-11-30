import React from "react";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";
import Container from "./container";

function Popular () {
    const {movies} = useContext(MovieContext);
    return (
        <div className="popular-movies">
            <div className="popular-box">
                {movies && movies.map((popularMovieItem, index) => (
                    <img key={index} src={`https://image.tmdb.org/t/p/w400${popularMovieItem.poster_path}`}  alt=""/>
                ))}
            </div>    
            
        </div>
    );
}


export default Popular;