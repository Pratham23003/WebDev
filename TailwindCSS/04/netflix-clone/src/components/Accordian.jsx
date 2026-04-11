import React, { useState } from "react";

const Accordian = ({ ques, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="">
        <div
          className="flex justify-between items-center p-6 my-2 bg-[#2d2d2d] hover:bg-[#414141] cursor-pointer transition-colors duration-200"
          onClick={() => setActive(!active)}
        >
          <h3 className="text-xl md:text-2xl text-white">{ques}</h3>
          <span className="text-4xl text-white font-light transform transition-transform duration-300">
            {active ? "×" : "+"}
          </span>
        </div>

        {active && (
          <div className="p-6 mt-[2px] bg-[#2d2d2d] text-lg md:text-xl text-white text-left whitespace-pre-line transition-all duration-200">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
