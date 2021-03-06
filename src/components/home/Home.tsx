import * as React from "react";
import { Link } from "react-router-dom";
import { home, homeHeading, homeNav, homeNavItem } from "./Home.scss";

export const Home = () => <>
  <div className={home}>
    <h1 className={homeHeading}>taqpan.github.io</h1>
    <p>my sandbox playground &#x1f603;</p>
    <ul className={homeNav}>
      <li className={homeNavItem}>
        <Link to="/border-radius">Border Radius Manipulator</Link>
      </li>
      <li className={homeNavItem}>
        <Link to="/mhw-clock">MHW Clock</Link>
      </li>
      <li className={homeNavItem}>
        <Link to="/gengo">元号</Link>
      </li>
    </ul>
  </div>
</>;
