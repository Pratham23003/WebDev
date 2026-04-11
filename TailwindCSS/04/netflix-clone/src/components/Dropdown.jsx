import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("English");
  return (
    <div className="relative text-white cursor-pointer focus:outline-none">
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 rounded border bg-black/40 px-3 py-1 backdrop-blur-sm ${
          open ? "border-white border-2" : "border-gray-500"
        }`}
      >
        <img src="/language.svg" alt="" className="w-4" />
        <div className="hidden sm:block">{lang}</div>
        <img src="/dropdown.svg" alt="" className="w-3" />
      </div>

      {/* Menu */}
      {open && (
        <div className="absolute top-full mt-1 w-full bg-black border border-gray-600 rounded">
          <div
            className="px-3 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => setLang("English") || setOpen(!open)}
          >
            English
          </div>

          <div
            className="px-3 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => setLang("हिन्दी") || setOpen(!open)}
          >
            हिन्दी
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
