import React from "react";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";
import Container from "./container";
import Popular from "./Popular";
import Movies from "./movies";
import Page from "./page";

function Output() {
    const {activeMenu} = useContext(MovieContext);
    return (
        <div className="Output">
            {activeMenu === "Popular" &&
            ( <div className="popular-box">
                <Popular />
             </div>
            )}

            { activeMenu === "All Movies" &&
            ( <div className="popular-box">
                <Movies />
                <Page />
            </div> )}
        </div>
    );
}

export default Output;