import React from "react";
import Container from "./container";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";
import HeroNavLogo from "./HeroNavLogo";
import HeroNavMenu from "./HeroNavMenu";
import HeroNavSearch from "./HeroNavSearch";

function HeroNav() {
    const {hiddenMenu, setHiddenMenu} = useContext(MovieContext);
    return (
        <nav className="nav-style">
            <div className="container">
                <div className="wrapper">
                    <HeroNavLogo />
                    <HeroNavMenu />
                </div>
                <HeroNavSearch />
                <i onClick={() => setHiddenMenu(!hiddenMenu)} id="burgerMenu" className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}></i>
            </div>
        </nav>
    );
}

export default HeroNav;