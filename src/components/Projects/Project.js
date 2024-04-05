import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Slide, Fade } from "react-awesome-reveal";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon you want to use

// Images Link
import Project1 from "./assets/project1.jpg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
import Project4 from "./assets/project4.jpg";
import Project5 from "./assets/project5.jpg";
import Project6 from "./assets/project6.jpg";
import Project7 from "./assets/project7.jpg";
import Project8 from "./assets/project8.jpg";
import Project9 from "./assets/project9.jpg";
import Project10 from "./assets/project10.jpg";
import Project11 from "./assets/project11.jpg";
import Project12 from "./assets/project12.jpg";
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
import Academic from "./Skills/Academic";
import MongoDB from "./Skills/MongoDb";
import Java from "./Skills/Java";
import Android from "./Skills/Android";
import Firebase from "./Skills/Firebase";
import Figma from "./Skills/Figma";
import CSS from "./Skills/CSS";
import Game from "./Skills/Game";
import C from "./Skills/C";
import Javascript from "./Skills/Javascript";
// SKills Link

function App() {
  function handleButtonClick(url) {
    window.location.href = url;
  }
  const skills = {
    react: <ReactJS key="react" />,
    tailwind: <TailwindCSS key="tailwind" />,
    node: <NodeJs key="node" />,
    mysql: <Mysql key="mysql" />,
    express: <ExpressJs key="express" />,
    socket: <Socket key="socket" />,
    bootstrap: <Bootstrap key="bootstrap" />,
    hackathon: <Hackathon key="hackathon" />,
    Academic: <Academic key="Academic" />,
    MongoDB: <MongoDB key="MongoDB" />,
    Java: <Java key="Java" />,
    Android: <Android key="Android" />,
    Firebase: <Firebase key="Firebase" />,
    Figma: <Figma key="Figma" />,
    CSS: <CSS key="CSS" />,
    Game: <Game key="Game" />,
    C: <C key="C" />,
    Javascript: <Javascript key="Javascript" />,
  };

  function createSkillsArray(skillsList) {
    return skillsList.map((skill) => skills[skill]);
  }

  const projectSkills1 = createSkillsArray(["react", "tailwind", "node"]);
  const projectSkills2 = createSkillsArray([
    "react",
    "tailwind",
    "node",
    "mysql",
    "express",
    "hackathon",
  ]);
  const projectSkills3 = createSkillsArray([
    "react",
    "bootstrap",
    "node",
    "socket",
    "hackathon",
  ]);
  const projectSkills4 = createSkillsArray([
    "react",
    "CSS",
    "mysql",
    "node",
    "express",
    "Academic",
  ]);
  const projectSkills5 = createSkillsArray([
    "react",
    "tailwind",
    "node",
    "MongoDB",
    "express",
    "hackathon",
  ]);
  const projectSkills6 = createSkillsArray([
    "Java",
    "Android",
    "Firebase",
    "Figma",
    "Academic",
    "hackathon"
  ]);
  const projectSkills7 = createSkillsArray(["Java", "Game", "Academic"]);
  const projectSkills8 = createSkillsArray(["C", "Game", "Academic"]);
  const projectSkills9 = createSkillsArray([
    "Javascript",
    "CSS",
    "node",
    "mysql",
    "express",
    "Academic",
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 px-4 py-2 text-lightText">
      <Fade delay={420} direction="up">
        <div className="relative flex items-center gap-2 mt-4 text-4xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
          <FaRegLightbulb className="text-yellow-400 animate-pulse" />
          <h1>Projects</h1>
        </div>
      </Fade>
      <div className="w-2/3 h-1 -mt-4 bg-gray-200 md:mb-3 animate-pulse md:w-1/2 md:-mt-1"></div>

      <Slide delay={420}>
        <ProjectsCard
          image={Project4}
          projectName="🛺 SUST Autorickshaw System 🛺"
          date="Sept 4, 2023 - Dec 30, 2023"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/SUST_Autorickshaw_Management_System"
            )
          }
          demo={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/SUST_Autorickshaw_Management_System"
            )
          }
          skills={projectSkills4}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project5}
          projectName="🗑️ Eco-Sync : Waste Management 🗑️"
          date="March 24, 2024 - March 31, 2024"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/SUST_Autorickshaw_Management_System"
            )
          }
          demo={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/SUST_Autorickshaw_Management_System"
            )
          }
          skills={projectSkills5}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project6}
          projectName="📱 RENT IT 📱"
          date="March 24, 2024 - March 31, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Rent_IT-App")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/Rent_IT-App")
          }
          skills={projectSkills6}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project2}
          projectName="☁️ Atoms-Sense ☁️"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/AtomSense-DU_ITVerse_Hackathon"
            )
          }
          demo={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/AtomSense-DU_ITVerse_Hackathon"
            )
          }
          skills={projectSkills2}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project3}
          projectName="👶 KIDDO 👶"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/Kiddo-LU-Hackathon"
            )
          }
          demo={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/Kiddo-LU-Hackathon/"
            )
          }
          skills={projectSkills3}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project7}
          projectName="📸 Mri-Shot 📸"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Mri-Shot")
          }
          demo={() => handleButtonClick("https://mri-shot.vercel.app/")}
          skills={projectSkills1}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project1}
          projectName="🧐 React Simplify Template 🧐"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/KIDDO")
          }
          demo={() => handleButtonClick("https://kiddo.vercel.app/")}
          skills={projectSkills1}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project8}
          projectName="🏃‍♀️ Survive IT Game 🏃‍♀️"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Survive-IT")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/Survive-IT")
          }
          skills={projectSkills7}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project9}
          projectName="🥷 Survival of Warrior 🥷"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/Survival-of-Warrior"
            )
          }
          demo={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/Survival-of-Warrior"
            )
          }
          skills={projectSkills8}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project10}
          projectName="📝 Task-Mate 📝"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Task-Mate")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/Task-Mate")
          }
          skills={projectSkills9}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project11}
          projectName="👁️ DALL·E ভিশন 👁️"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/DALL-E-Vision")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/DALL-E-Vision")
          }
          skills={projectSkills1}
        />
      </Slide>

      <Slide delay={420}>
        <ProjectsCard
          image={Project12}
          projectName="❓ GPT-Vai ❓"
          date="Aug 4, 2023 - Mar 30, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/GPT-Vai")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/GPT-Vai")
          }
          skills={projectSkills1}
        />
      </Slide>
    </div>
  );
}

export default App;
