import React, { useState } from "react";

function Form() {

    const [query, setQuery] = useState("");

    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {
        e.preventDefault();


        const url = `https://api.themoviedb.org/3/search/movie?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&query=${query}&language=en-US&page=${currentP}`;
        false




        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);

        } catch (err) {
            console.error(err);
        }

    }
    return ( <
        div >
        <
        form className = "form" >
        <
        input className = "input"
        type = "text"
        placeholder = "Search for your movie"
        name = "query"
        value = { query }
        onChange = {
            (e) => setQuery(e.target.value)
        }
        /> <
        button className = "button"
        type = "submit"
        onClick = { searchMovies } > Search < /button> < /
        form > <
        div className = "card-list" > {
            movies.filter(movie => movie.poster_path).map(movie => ( <
                div className = "card"
                key = { movie.id } >
                <
                img className = "card-image"
                src = { `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` }
                alt = { movie.title + "poster" }
                /> <
                div className = "card-content" >
                <
                h3 className = "card-title" > { movie.title } < /h3> <
                p > < small > RELEASE DATE: { movie.release_date } < /small></p >
                <
                p > < small > RATING: { movie.vote_average } < /small></p >
                <
                p className = "card-desc" > { movie.overview } < /p> < /
                div > <
                /div>
            ))
        } <
        /div> < /
        div >
    );
}

export default Form;