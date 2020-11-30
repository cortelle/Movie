import React from "react";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";



function HeroNavLink(props){
    const {setHiddenMenu,activeMenu, setActiveMenu} = useContext(MovieContext);
    return(
    <button onClick= {() => {setActiveMenu(props.btnText);
         setHiddenMenu(true);}} 
         className="navlink"
         style={{ color: activeMenu === props.btnText ? "#f9a5ff" : "#ffff" }}
         >{props.btnText}
    </button>
   
    );
}

export default HeroNavLink;