import React from "react";

const NewPostSection = () => {
  return (
    <div className="p-4 border border-primary-200 flex flex-col gap-4 dark:border-primary-700">
      <input
        className=" h-[2.5rem] px-4 border border-primary-200 focus:outline-none focus:border-2 focus:border-primary-950 dark:bg-primary-950 dark:border-primary-700 dark:text-primary-100"
        placeholder="section title"
      />
      <textarea
        className=" min-h-[14rem] px-4 border border-primary-200 focus:outline-none focus:border-2 focus:border-primary-950 pt-4 dark:bg-primary-950 dark:border-primary-700 dark:text-primary-100"
        placeholder="section content"
      />
    </div>
  );
};

export default NewPostSection;
