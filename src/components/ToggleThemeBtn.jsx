import { AiOutlineMoon } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import React, { useEffect, useState } from "react";

const ToggleThemeBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  return (
    <button
      className="flex gap-4 items-center border border-primary-200 h-[2rem] rounded-full px-2 dark:bg-primary-950 dark:text-white"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {!isDarkMode ? (
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
  );
};

export default ToggleThemeBtn;
