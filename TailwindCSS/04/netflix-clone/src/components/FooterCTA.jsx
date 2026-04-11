import React from "react";

const FooterCTA = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full mt-20 mb-2 px-4 md:px-0">
      <div className="mt-8">
        <h4 className="text-md mb-4 text-white text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
      </div>

      <div className="flex justify-center items-center mt-4 gap-3">
        <input
          type="email"
          className="px-4 py-4 w-140 rounded border border-gray-500 focus:border-white active:border-2 text-white"
          name="email"
          id=""
          placeholder="Email Address"
        />
        <div className="">
          <button className="bg-red-600 px-9 py-3.5 rounded text-white font-sans font-semibold cursor-pointer text-2xl flex hover:bg-red-800 transition-colors duration-200">
            Get Started
            <img src="/right.svg" className="w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
