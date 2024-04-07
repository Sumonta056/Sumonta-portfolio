import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import ScrollProgressBar from "react-scroll-progress-bar";
import Banner from "./components/Banner/Banner";
import "./app.css";
const Particle = lazy(() => import("./components/Particle"));
const Project = lazy(() => import("./components/Projects/Project"));
const Achievement = lazy(() => import("./components/Achivement/Index.jsx"));
const Blog = lazy(() => import("./components/blog/Blog.jsx"));
const About = lazy(() => import("./components/about/About.jsx"));
const Footer = lazy(() => import("./components/common/footer/Footer.jsx"));

function App() {
  return (
    <div className="bg-bodyColor">
      <ScrollProgressBar bgcolor="#d8d2db" height="7px" />
      <Banner />
      <Suspense fallback={<CircularProgress />}>
        <Particle />
      </Suspense>

      <div id="about">
        <About />
      </div>

      <div id="project">
        <Project />
      </div>

      <div id="achivement">
        <Achievement />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <Footer />

      <ScrollUpButton
        ContainerClassName="ScrollUpButton__Container"
        style={{
          width: 50,
          height: 50,
          outline: "none",
          backgroundColor: "#46e7dadc",
          color: "#fff",
          fontSize: "20px",
          padding: "10px",
          animation: "color-change 2s infinite",
          WebkitAnimation: "color-change 2s infinite", // for Safari compatibility
        }}
      />
    </div>
  );
}

export default App;
