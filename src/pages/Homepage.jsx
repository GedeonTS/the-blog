import React from "react";
import Menu from "../components/Menu";
import "./styles.css";
import horizon from "../assets/horizon.jpg";
import Footer from "../components/Footer";

function Homepage() {
  const text =
    "Post lorem ipsum dolor sit atem 1Post lorem ipsum dolor sit atem 1Post lorem ipsum dolor sit atem 1Post lorem ipsum dolor sit atem 1";
  return (
    <div className="homepage">
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
      <div className="content-wrapper">
        <h2>Recent posts</h2>
        <ul className="blogs-list">
          <li>
            <a href="/post/1">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/2">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/3">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/1">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/2">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/3">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
        </ul>

        <h2>More posts</h2>
        <ul className="blogs-list">
          <li>
            <a href="/post/1">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/2">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/3">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/1">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/2">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
          <li>
            <a href="/post/3">
              <img src={horizon} className="blogs-list-item-image" alt="" />
              {text}
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
