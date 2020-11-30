import React from "react";
import HeroNav from "./Heronav";
import Output from "./Output";


const newStyle={
    width:"100%",
    heigth:"100%",
}

function Hero(){
    return (
        <section style={newStyle} className="hero">
            <HeroNav />
            <Output />
        </section>
    );
}
export default Hero;