import React from "react";
import { awrapper } from "../dummydata";
import { FaGithub } from "react-icons/fa";

const Awrapper = () => {
  return (
    <div className="w-full">
      <div className="grid1 awrapper">
        {awrapper.map((val) => {
          return (
            <div className="flex pb-6">
              <div className="flex flex-col justify-center">
                <h1 className="flex justify-center gap-2 text-4xl font-semibold">
                  <FaGithub />
                  {val.data}
                </h1>
                <h3 className="flex justify-center text-2xl text-teal2">{val.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awrapper;
