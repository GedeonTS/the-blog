import React from "react";

const CircularIconBtn = ({ icon }) => {
  return (
    <button className="w-[2.5rem] h-[2.5rem] border border-primary-300 rounded-full hover:bg-primary-950 hover:text-white text-primary-950 flex items-center justify-center dark:text-white dark:hover:text-primary-950 dark:hover:bg-white">
      {icon}
    </button>
  );
};

export default CircularIconBtn;
