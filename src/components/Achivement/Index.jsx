import Section from "./Section";
import { roadmap } from "./index";
import { grid } from "../../assets";
import { Gradient } from "./Roadmap";
import { Fade } from "react-awesome-reveal";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon you want to use

const Roadmap = () => (
  <>
    <div className="flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-2 text-lightText">
      <Fade delay={420} direction="up">
        <div className="relative flex items-center gap-2 mt-4 text-4xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
          <FaRegLightbulb className="text-yellow-400 animate-pulse" />
          <h1>Achievment</h1>
        </div>
      </Fade>
      <div className="w-2/3 h-1 mb-3 bg-gray-200 animate-pulse md:w-1/2"></div>
    </div>

    <Section className="-mt-20 overflow-hidden" id="roadmap">
      <div className="container">
        <div className="relative grid md:grid-cols-2 md:pb-[2rem] justify-items-center align-items-center">
          {roadmap.map((item) => {
            return (
              <div
                className={`md:flex even:md:translate-y-[6rem] p-2 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15  shadow-[0_10px_20px_rgba(140,_46,_170,_0.7)] m-2">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <Fade delay={420} direction="left">
                      <div className="-my-10 mb-7 md:pt-5 -mx-15">
                        <img
                          className="w-full"
                          src={item.imageUrl}
                          width={628}
                          height={426}
                          Z
                          alt={item.title}
                        />
                      </div>
                    </Fade>
                    <h3 className="mb-4 text-sm font-semibold md:text-xl h2 text-gray-50">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 body-2 text-n-4 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  </>
);

export default Roadmap;
