import React from "react";
import HeroNavLink from "./HeroNavLink";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";

function HeroNavMenu() {
    const {hiddenMenu} = useContext(MovieContext);
    return (
     <div className={(hiddenMenu ? "hidden" : "") + " Nav-menu"}>
         <HeroNavLink  btnText="Popular"/>
         <HeroNavLink btnText="All Movies" />
         
     </div>
    );
}


 

export default HeroNavMenu;