import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <div className="flex items-center justify-between h-12 text-white-900 dark:bg-slate-900 dark:text-white px-4 py-8">
        <div className="logo font-bold">Logo</div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-2 dark:bg-slate-900 dark:text-white">
          <span>Home</span>
          <span>About Us</span>
          <span>Contact</span>
          <button
            className="text-xl cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌑" : "☀️"}
          </button>
        </div>

        <button
          className="text-2xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="flex flex-col text-center justify-center items-center gap-2 bg-white text-slate-900 p-4 sm:hidden dark:bg-slate-900 dark:text-white">
          <span>Home</span>
          <span>About Us</span>
          <span>Contact</span>
          <button
            className="text-2xl cursor-pointer sm:hidden"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌑" : "☀️"}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-7 text-white text-center text-xl sm:text-2xl dark:bg-slate-900 dark:text-white">
        <div className="bg-slate-500 p-4 rounded-sm hover:bg-slate-600">
          One
        </div>
        <div className="bg-slate-500 p-4 rounded-sm hover:bg-slate-600">
          Two
        </div>
        <div className="bg-slate-500 p-4 rounded-sm hover:bg-slate-600">
          Three
        </div>
        <div className="bg-slate-500 p-4 rounded-sm hover:bg-slate-600">
          Four
        </div>
        <div className="bg-slate-500 p-4 rounded-sm hover:bg-slate-600">
          Five
        </div>
        <div className="bg-slate-500 p-4 rounded-sm hover:bg-slate-600">
          Six
        </div>
      </div>
    </div>
  );
}

export default App;
