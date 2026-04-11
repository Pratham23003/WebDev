import React from "react";
import Dropdown from "./Dropdown";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full mt-20 mb-2 px-4 md:px-0">
      <div className="mt-8 flex gap-1">
        <h6 className="text-md mb-4 text-neutral-400">
          Questions? Call  
        </h6>
        <span className="text-neutral-400 underline "> 000-800-919-1743</span>
      </div>

      <div className="mt-4 gap-3">
        <div class="grid grid-cols-4 gap-4 text-neutral-400 text-sm underline">
            <div>FAQ</div>
            <div>Help Centre</div>
            <div>Account</div>
            <div>Media Centre</div>
            <div>Investor Relations</div>
            <div>Jobs</div>
            <div>Ways to Watch</div>
            <div>Terms of Use</div>
            <div>Privacy</div>
            <div>Cookie Preferences</div>
            <div>Corporate Information</div>
            <div>Contact Us</div>
            <div>Speed Test</div>
            <div>Legal Notices</div>
            <div>Only on Netflix</div>
        </div>
      </div>

    <div className="mt-10 w-30">
        <Dropdown></Dropdown>
    </div>

    <div className="text-neutral-400 mt-8 text-sm">
        <h3>Netflix Clone - Built by <a className="underline" href="https://github.com/Pratham23003">Pratham23</a></h3>
    </div>

    <div className="mt-6 pb-20 text-neutral-400 text-sm">
        Built by <a className="underline" href="https://github.com/Pratham23003">Pratham23</a> as a CSS learning project. All logos, videos, and trademarks belong to their respective owners and are used here for educational purposes only.    </div>
    </div>
  );
};

export default Footer;
