import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Slide } from "react-awesome-reveal";

// Images Link
import Project1 from "./assets/Project.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
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
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 px-4 py-2 text-lightText">
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
