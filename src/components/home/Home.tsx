import * as React from "react";
import { Link } from "react-router-dom";
import { home, homeHeading, homeNav, homeNavItem } from "./Home.scss";

export default () => <>
  <div className={home}>
    <h1 className={homeHeading}>taqpan.github.io</h1>
    <ul className={homeNav}>
      <li className={homeNavItem}>
        <Link to="/example">Example</Link>
      </li>
      <li className={homeNavItem}>
        <Link to="/border-radius">Border Radius Manipulator</Link>
      </li>
      <li className={homeNavItem}>
        <Link to="/gengo">元号</Link>
      </li>
    </ul>
  </div>
</>;
