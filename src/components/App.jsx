import React from "react";
import Hero from "./Hero";
import {MovieState} from "./MovieContext";




function App() {
  return (
      <MovieState>
        <Hero />
      </MovieState>
    
  );
}

export default App;
