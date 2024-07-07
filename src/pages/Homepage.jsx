import React from "react";
import Menu from "../components/Menu";
import "./styles.css";

function Homepage() {
  return (
    <div style={{ background: "100vw" }}>
      <div className="header-main">
        <div className="header-main-inner">
          <ul>
            <li>Ushindi's Blog</li>
            <li>
              <Menu />
            </li>
          </ul>
          <div className="header-main-inner-title">
            <h1>Welcome to the my blog</h1>
            <p>
              Here you will find all the latest news and updates from the world
              of tech
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Recent posts</h2>
        <ul>
          <li>
            <a href="/post/1">Post 1</a>
          </li>
          <li>
            <a href="/post/2">Post 2</a>
          </li>
          <li>
            <a href="/post/3">Post 3</a>
          </li>
        </ul>

        <h2>More posts</h2>
        <ul>
          <li>
            <a href="/post/4">Post 4</a>
          </li>
          <li>
            <a href="/post/5">Post 5</a>
          </li>
          <li>
            <a href="/post/6">Post 6</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
