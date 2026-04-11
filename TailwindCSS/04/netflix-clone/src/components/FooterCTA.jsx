import React from "react";

const FooterCTA = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full mt-20 mb-2 px-4 md:px-0">
      <div className="mt-8">
        <h4 className="text-md mb-4 text-white text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-3 w-full">
        <input
          type="email"
          className="px-4 py-4 w-full sm:max-w-[400px] rounded border border-gray-500 focus:border-white active:border-2 text-white"
          name="email"
          id=""
          placeholder="Email Address"
        />
        <button className="bg-red-600 px-6 py-3 sm:px-9 sm:py-3.5 rounded text-white font-sans font-semibold cursor-pointer text-xl sm:text-2xl flex items-center justify-center gap-2 hover:bg-red-800 transition-colors duration-200 whitespace-nowrap">
          Get Started
          <img src="/right.svg" className="w-6 sm:w-8" />
        </button>
      </div>
    </div>
  );
};

export default FooterCTA;
