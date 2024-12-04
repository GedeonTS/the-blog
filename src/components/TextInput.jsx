import React from "react";

const TextInput = ({ type = "text", placeholder = "", onChange }) => {
  return (
    <input
      type={type}
      className="h-[3rem] w-full pl-4 border-primary-300 border dark:border-primary-700 dark:bg-primary-950 dark:text-white"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
