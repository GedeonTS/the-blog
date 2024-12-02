import React, { useState } from "react";
import { AiOutlineMoon } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <nav className="h-[3rem] px-8 flex items-center justify-between border-b border-b-primary-100 bg-white fixed top-0 left-0 right-0">
      <h1 className="font-semibold">Ushindi's Blog</h1>
      <ul className="flex gap-4 items-center font-semibold">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>
            <div className="h-[2rem] bg-primary-950 text-white flex items-center justify-center px-4 rounded-lg">
              Blog
            </div>
          </Link>
        </li>
        <li>
          <button
            className="flex gap-4 items-center border border-primary-200 h-[2rem] rounded-full px-2"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <>
                <FaCircle size={20} />
                <GoSun size={20} />
              </>
            ) : (
              <>
                <AiOutlineMoon size={20} />
                <FaCircle size={20} />
              </>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
