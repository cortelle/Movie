import React from "react";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";

function HeroNavSearch() {
    const {search, setSearch, handleChange, activeMenu} = useContext(MovieContext);

    return ( 
        <form onSubmit={handleChange} className="form-style">
            { activeMenu !== "Popular" && (
                
             <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search for movies........"/>
             )
            }
        </form>
    );
}

export default HeroNavSearch;