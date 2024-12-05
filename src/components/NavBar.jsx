import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleThemeBtn from "./ToggleThemeBtn";
import LoginPopup from "../popups/LoginPopup";
import SignUpPopup from "../popups/SignUpPopup";

const NavBar = () => {
  const location = useLocation();

  const [isLogingIn, setIsLogingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <nav className="h-[3rem] px-8 flex items-center justify-between border-b border-b-primary-100 bg-white fixed top-0 left-0 right-0 dark:text-white dark:bg-primary-950 dark:border-primary-700">
      {isLogingIn && (
        <LoginPopup
          closeHandler={() => setIsLogingIn(false)}
          signUpHandler={() => {
            setIsLogingIn(false);
            setIsSigningUp(true);
          }}
        />
      )}
      {isSigningUp && (
        <SignUpPopup
          closeHandler={() => setIsSigningUp(false)}
          loginHandler={() => {
            setIsLogingIn(true);
            setIsSigningUp(false);
          }}
        />
      )}
      <h1 className="font-semibold">Ushindi's Blog</h1>
      <ul className="flex gap-4 items-center font-semibold">
        {location.pathname === "/" && (
          <>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </>
        )}
        {location.pathname !== "/" && (
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        )}
        <li>
          <Link to={"/blog"}>
            <div className="h-[2rem] bg-primary-950 text-white flex items-center justify-center px-4 rounded-lg dark:text-primary-950 dark:bg-white">
              Blog
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/newpost"}>
            <div className="h-[2rem] text-primary-950 hover:bg-primary-950 hover:text-white flex items-center justify-center px-4 rounded-lg border border-primary-300 dark:text-primary-400">
              new post
            </div>
          </Link>
        </li>
        <li>
          <button
            className="text-primary-950 dark:text-primary-200"
            onClick={() => setIsLogingIn(true)}
          >
            Login
          </button>
        </li>
        <li>
          <ToggleThemeBtn />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
