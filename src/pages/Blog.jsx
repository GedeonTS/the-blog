import React from "react";
import Menu from "../components/Menu";

function Blog() {
  return (
    <div>
      <div className="header-main">
        <div className="header-main-inner">
          <ul>
            <li>Ushindi's Blog</li>
            <li>
              <Menu />
            </li>
          </ul>
          <div className="header-main-inner-title">
            <h1>Welcome to my blog</h1>
            <p>
              Here you will find all the latest news and updates from the world
              of tech
            </p>
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-3xl my-6 ml-4">Latest posts:</h2>
      <div className="w-full px-[1rem] grid grid-cols-4 gap-6">
        <div className="w-full bg-yellow-400 py-6"></div>
      </div>
    </div>
  );
}

export default Blog;
