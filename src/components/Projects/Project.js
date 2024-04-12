import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Fade } from "react-awesome-reveal";
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
import Project13 from "./assets/project15.jpg";
import Project14 from "./assets/project14.jpg";
import Project15 from "./assets/project16.jpg";
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
import Python from "./Skills/Python";
import Workflow from "./Skills/Workflow";
import Github from "./Skills/Github";
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
    Python: <Python key="Python" />,
    Workflow: <Workflow key="Workflow" />,
    Github: <Github key="Github" />,
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
    "hackathon",
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
  const projectSkills10 = createSkillsArray(["Javascript", "CSS", "Academic"]);
  const projectSkills11 = createSkillsArray([
    "Python",
    "Workflow",
    "Javascript",
  ]);
  const projectSkills12 = createSkillsArray(["Python", "Github"]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 px-4 py-2 text-lightText">
      <Fade delay={420} direction="left">
        <div className="relative flex items-center gap-2 mt-4 text-4xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
          <FaRegLightbulb className="text-yellow-400 animate-pulse" />
          <h1>Projects</h1>
        </div>
      </Fade>
      <div className="w-2/3 h-1 -mt-4 bg-gray-200 md:mb-3 animate-pulse md:w-1/2 md:-mt-1"></div>

      <Fade delay={420} direction="left">
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
      </Fade>

      <Fade delay={420} direction="left">
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
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project6}
          projectName="📱 RENT IT 📱"
          date="Dec 24, 2023 - Nov 31, 2023"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Rent_IT-App")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/Rent_IT-App")
          }
          skills={projectSkills6}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project2}
          projectName="☁️ Atoms-Sense ☁️"
          date="Nov 3, 2023 - Nov 4, 2023"
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
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project3}
          projectName="👶 KIDDO 👶"
          date="Oct 14, 2023 - Oct 15, 2023"
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
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project14}
          projectName="🤖 GitHub Follower Notification Bot 🤖"
          date="Jan 20, 2024 - Feb 20, 2024"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/GitHub-Follower-Notification-Action-Bot"
            )
          }
          demo={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/GitHub-Follower-Notification-Action-Bot"
            )
          }
          skills={projectSkills11}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project7}
          projectName="📸 Mri-Shot 📸"
          date="Jan 4, 2024 - Jan 14, 2024"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Mri-Shot")
          }
          demo={() => handleButtonClick("https://mri-shot.vercel.app/")}
          skills={projectSkills1}
        />
      </Fade>

      <Fade delay={420} direction="left">
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
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project8}
          projectName="🏃‍♀️ Survive IT Game 🏃‍♀️"
          date="Mar 30, 2022 - Sept 30, 2022"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Survive-IT")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/Survive-IT")
          }
          skills={projectSkills7}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project9}
          projectName="🥷 Survival of Warrior 🥷"
          date="Aug 4, 2021 - Dec 30, 2021"
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
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project10}
          projectName="📝 Task-Mate 📝"
          date="May 4, 2023 - Aug 30, 2023"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/Task-Mate")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/Task-Mate")
          }
          skills={projectSkills9}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project13}
          projectName="🦾 Personal Portfolio 🦾"
          date="Jan 4, 2023 - Jul 30, 2023"
          github={() =>
            handleButtonClick(
              "https://github.com/Sumonta056/sumonta056.github.io"
            )
          }
          demo={() => handleButtonClick("https://sumonta056.github.io/")}
          skills={projectSkills10}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project11}
          projectName="👁️ DALL·E ভিশন 👁️"
          date="Oct 20, 2023 - Oct 30, 2023"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/DALL-E-Vision")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/DALL-E-Vision")
          }
          skills={projectSkills1}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project12}
          projectName="❓ GPT-Vai ❓"
          date="Oct 20, 2023 - Oct 30, 2023"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/GPT-Vai")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/GPT-Vai")
          }
          skills={projectSkills1}
        />
      </Fade>

      <Fade delay={420} direction="left">
        <ProjectsCard
          image={Project15}
          projectName="✍🏻 GitHub Tutorial ✍🏻"
          date="Jan 20, 2023 - Dec 20, 2023"
          github={() =>
            handleButtonClick("https://github.com/Sumonta056/GitHub-Tutorial")
          }
          demo={() =>
            handleButtonClick("https://github.com/Sumonta056/GitHub-Tutorial")
          }
          skills={projectSkills12}
        />
      </Fade>
    </div>
  );
}

export default App;
