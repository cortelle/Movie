import React from "react";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";
import Loader from "./loader";

function Movies(){
    const {series, isLoading} = useContext(MovieContext)
    return(
        <div className="movies">
            <div className="popular-box">
                {series && series.length === 0 && (
                    <h1 className="error">Page not found</h1>
                )
                }

                {!isLoading ? (
                    series && series.map((movieItem, index) => (
                        <img key={index} src={`https://image.tmdb.org/t/p/w400${movieItem.poster_path}`} alt=""/>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    )
}

export default Movies;