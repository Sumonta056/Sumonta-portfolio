import React from "react";
import Banner from "./components/Banner/Banner";
import Project from "./components/Projects/Project";
import Particle from "./components/Particle.js";

function App() {
  return (
    <div className="bg-bodyColor">
      <Particle />
      <React.Fragment>
        <Banner />
        <Project />
      </React.Fragment>
    </div>
  );
}

export default App;
