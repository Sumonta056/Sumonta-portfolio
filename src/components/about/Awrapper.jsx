import React from "react";
import { awrapper } from "../dummydata";
import { FaGithub } from "react-icons/fa";

const Awrapper = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between awrapper">
        {awrapper.map((val) => {
          return (
            <div className="flex justify-center pb-6 md:w-72">
              <div>
                <h1 className="flex gap-2 text-4xl font-semibold">
                  <FaGithub />
                  {val.data}
                </h1>
                <h3 className="text-2xl text-teal2">{val.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awrapper;
