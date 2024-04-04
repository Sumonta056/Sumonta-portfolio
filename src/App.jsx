import React, { lazy } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import ScrollProgressBar from "react-scroll-progress-bar";
import Banner from "./components/Banner/Banner";
const Particle = lazy(() => import("./components/Particle"));
const Project = lazy(() => import("./components/Projects/Project"));

function App() {
  return (
    <div className="bg-bodyColor">
      <ScrollProgressBar bgcolor="#d8d2db" height="7px" />
      <React.Suspense
        fallback={<div className="z-10 bg-black">Loading...</div>}
      >
        <Particle />
      </React.Suspense>
      <Banner />
      <div id="project">
        <Project />
      </div>
      <ScrollUpButton
        ContainerClassName="ScrollUpButton__Container"
        style={{
          width: 50,
          height: 50,
          outline: "none",
          backgroundColor: "#b2e7f7",
          color: "#fff",
          fontSize: "20px",
          padding: "10px",
        }}
      />
    </div>
  );
}

export default App;
