import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Slide , Fade } from "react-awesome-reveal";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon you want to use

// Images Link
import Project1 from "./assets/project1.jpg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
// Images Link

// SKills Link
import ReactJS from "./Skills/React";
import TailwindCSS from "./Skills/TailwindCSS";
import NodeJs from "./Skills/Node";
import Mysql from "./Skills/MySQL";
import ExpressJs from "./Skills/Express";
import Socket from "./Skills/Socket";
import Bootstrap from "./Skills/Bootstrap";
import Hackathon from "./Skills/Hackathon";
// SKills Link

function App() {
  function handleButtonProject1_GitHub() {
    window.location.href =
      "https://github.com/Sumonta056/ReactJS-Simplify-Template";
  }
  function handleButtonProject1_Demo() {
    window.location.href = "https://react-js-simplify-template.vercel.app/";
  }
  const projectSkills3 = [
    <ReactJS key="react" />,
    <Bootstrap key="tailwind" />,
    <NodeJs key="node" />,
    <Socket key="socket" />,
    <Hackathon key="hackathon" />,
  ];

  const projectSkills = [
    <ReactJS key="react" />,
    <TailwindCSS key="tailwind" />,
    <NodeJs key="node" />,
  ];

  const projectSkills2 = [
    <ReactJS key="react" />,
    <TailwindCSS key="tailwind" />,
    <NodeJs key="node" />,
    <Mysql key="mysql" />,
    <ExpressJs key="express" />,
    <Hackathon key="hackathon" />,
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 px-4 py-2 text-lightText">
      <Fade delay={420} direction="up">
        <div className="relative flex items-center gap-2 mt-4 text-4xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
          <FaRegLightbulb className="text-yellow-400 animate-pulse" />
          <h1>Projects</h1>
        </div>
      </Fade>
      <div className="w-2/3 h-1 mb-3 bg-gray-200 animate-pulse md:w-1/2"></div>
      <Slide delay={420}>
        <ProjectsCard
          image={Project1}
          projectName="🧐 React Simplify Template 🧐"
          date="Aug 4, 2023 - Mar 30, 2024"
          description="React Simplify Template: Your go-to for streamlining React setups,
        using features with library integration and Tailwind CSS."
          github={handleButtonProject1_GitHub}
          demo={handleButtonProject1_Demo}
          skills={projectSkills}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project2}
          projectName="☁️ Atoms-Sense ☁️"
          date="Aug 4, 2023 - Mar 30, 2024"
          description="Explore global air quality data, from top polluted cities to cleanest ones. Real-time insights, interactive maps, and economic factors at your fingertips.."
          github={handleButtonProject1_GitHub}
          demo={handleButtonProject1_Demo}
          skills={projectSkills2}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project3}
          projectName="👶 KIDDO 👶"
          date="Aug 4, 2023 - Mar 30, 2024"
          description="Empowering parents through a comprehensive ecosystem. Instant advisor communication, personalized consultations, emergency support, community interaction, marketplace for child products, and a reading library."
          github={handleButtonProject1_GitHub}
          demo={handleButtonProject1_Demo}
          skills={projectSkills3}
        />
      </Slide>
    </div>
  );
}

export default App;
