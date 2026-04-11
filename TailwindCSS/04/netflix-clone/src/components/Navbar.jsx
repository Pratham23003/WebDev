import Dropdown from "./Dropdown.jsx";

function Navbar() {
  return (
    <div className="w-full absolute z-50">
      <nav className="flex justify-between px-3 py-3 sm:px-4 py-2 md:justify-around">
        <img src="/netflix-logo.png" className="w-28 sm:w-48 md:38" />

        <div className="flex items-center gap-2 sm:gap-4">
          <Dropdown></Dropdown>

          <button className="bg-red-600 px-4 py-1 rounded text-white font-sans font-medium cursor-pointer hover:bg-red-800">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
