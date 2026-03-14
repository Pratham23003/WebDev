import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("English");
  return (
    <div className="relative text-white cursor-pointer hover:border-2 rounded">
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded border border-gray-500 bg-black/40 px-3 py-1 backdrop-blur-sm"
      >
        <img src="/language.svg" alt="" className="w-4" />
        <div>{lang}</div>
        <img src="/dropdown.svg" alt="" className="w-3" />
      </div>

      {/* Menu */}
      {open && (
        <div className="absolute top-full mt-1 w-full bg-black border border-gray-600 rounded">
          <div
            className="px-3 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => setLang("English") && setOpen(false)}
          >
            English
          </div>

          <div
            className="px-3 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => setLang("हिन्दी") && setOpen(false)}
          >
            हिन्दी
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
