import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NewPostSection from "../components/NewPostSection";
import { CiImageOn } from "react-icons/ci";

const NewPost = () => {
  const [sections, setSections] = useState([]);

  return (
    <div className="px-[10%] pt-[4rem] dark:bg-primary-950 min-h-[100vh]">
      <NavBar />
      <div className="p-4 w-full border border-primary-200 flex flex-col gap-4 dark:border-primary-700">
        <input
          placeholder="Post title"
          className="h-[2.5rem] px-4 border border-primary-200 focus:outline-none focus:border-2 focus:border-primary-950 dark:border-primary-700 dark:bg-primary-950 dark:text-primary-200"
        />
        <label
          htmlFor="file-input"
          className="w-full py-4 flex items-center justify-center border border-primary-200 cursor-pointer text-primary-700 dark:border-primary-700"
        >
          <CiImageOn size={128} />
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className="hidden"
        />
        {sections.map((postSection) => (
          <NewPostSection />
        ))}
        <div className="w-full flex justify-end">
          <button
            className="h-[2.2rem] rounded-md px-4 bg-primary-950 text-white dark:text-primary-950 dark:bg-white"
            onClick={() =>
              setSections([...sections, { title: "", content: "" }])
            }
          >
            New section
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
