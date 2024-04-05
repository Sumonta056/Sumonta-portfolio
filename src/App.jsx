import React, { lazy } from "react";
import { CircularProgress } from "@material-ui/core";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import ScrollProgressBar from "react-scroll-progress-bar";
import Banner from "./components/Banner/Banner";
const Particle = lazy(() => import("./components/Particle"));
const Project = lazy(() => import("./components/Projects/Project"));
const Achievement = lazy(() => import("./components/Achivement/Index.jsx"));


function App() {
  return (
    <div className="bg-bodyColor">
      <ScrollProgressBar bgcolor="#d8d2db" height="7px" />
      <Banner />
      <React.Suspense fallback={<CircularProgress />}>
        <Particle />
      </React.Suspense>

      <div id="project">
        <Project />
      </div>

      <div id="achivement">
        <Achievement />
      </div>

      <ScrollUpButton
        ContainerClassName="ScrollUpButton__Container"
        style={{
          width: 50,
          height: 50,
          outline: "none",
          backgroundColor: "#e6faff",
          color: "#fff",
          fontSize: "20px",
          padding: "10px",
        }}
      />
    </div>
  );
}

export default App;
