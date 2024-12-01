import React, { useEffect } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const routes = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
  ];

  return (
    <ul className="flex items-center gap-4">
      {routes.map((route) => {
        return (
          <li
            className={`${location.pathname === route.to ? "underline" : ""}`}
          >
            <Link to={route.to}>{route.name}</Link>
          </li>
        );
      })}
      <li>
        <Link to={"/blog"}>
          <div className="h-[2.2rem] pl-[1rem] pr-[1rem] rounded-lg border border-white flex items-center justify-center text-white bg-blue-950">
            Blog
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
