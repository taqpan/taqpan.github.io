import * as React from "react";
import { Link } from "react-router-dom";
import { homeHeading, homeNav, homeNavItem } from "./Home.scss";

export default () => <>
  <h1 className={homeHeading}>taqpan.github.io</h1>
  <ul className={homeNav}>
    <li className={homeNavItem}>
      <Link to="/example">Example</Link>
    </li>
  </ul>
</>;
