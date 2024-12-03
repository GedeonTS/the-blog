import React from "react";
import { Link } from "react-router-dom";
import ToggleThemeBtn from "./ToggleThemeBtn";

const NavBar = () => {
  return (
    <nav className="h-[3rem] px-8 flex items-center justify-between border-b border-b-primary-100 bg-white fixed top-0 left-0 right-0 dark:text-white dark:bg-primary-950">
      <h1 className="font-semibold">Ushindi's Blog</h1>
      <ul className="flex gap-4 items-center font-semibold">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Link to={"/blog"}>
            <div className="h-[2rem] bg-primary-950 text-white flex items-center justify-center px-4 rounded-lg">
              Blog
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/newpost"}>
            <div className="h-[2rem] text-primary-950 hover:bg-primary-950 hover:text-white flex items-center justify-center px-4 rounded-lg border border-primary-300">
              new post
            </div>
          </Link>
        </li>
        <li>
          <ToggleThemeBtn />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
