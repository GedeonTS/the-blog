import React from "react";

const TextInput = ({ type = "text", placeholder = "", onChange }) => {
  return (
    <input
      type={type}
      className="h-[3rem] w-full pl-4 border-primary-300 border dark:border-primary-700 dark:bg-primary-950 dark:text-white focus:outline-none focus:border-2 focus:border-primary-950 focus:dark:border-primary-300"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
