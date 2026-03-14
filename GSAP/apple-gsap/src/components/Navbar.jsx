import React from "react";
import { Navlinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="appleLogo" />

        <ul>
          {Navlinks.map((item) => (
            <li key={item.label}>
              <a href={item.label}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search" />
            </button>
            <button>
                <img src="/cart.svg" alt="Cart" />
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
