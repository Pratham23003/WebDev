import Dropdown from "./Dropdown.jsx";

function Navbar() {
  return (
    <div className="w-full absolute z-50">
      <nav className="flex justify-around items-center p-1.5">
        <img src="/netflix-logo.png" className="w-48" />

        <div className="flex items-center gap-4">
          <Dropdown></Dropdown>

          <button className="bg-red-600 px-4 py-1 rounded text-white font-sans cursor-pointer">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
