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

  useEffect(() => {
    console.log(location);
  }, [location]);
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
    </ul>
  );
}

export default Menu;
