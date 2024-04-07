import React from "react";
import { awrapper } from "../Data";


const Awrapper = () => {
  return (
    <div className="w-full">
      <div className="grid1 awrapper">
        {awrapper.map((val) => {
          return (
            <div className="flex mb-2 item">
              <div className="flex flex-col justify-center" >
                <h1 className="flex justify-center gap-2 mb-1 text-4xl font-semibold">
                  {val.cover}
                  {val.data}
                </h1>
                <h3 className="flex justify-center text-2xl text-teal2">
                  {val.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awrapper;
