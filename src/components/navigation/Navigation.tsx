import * as React from "react";
import { Link } from "react-router-dom";
import { navigation } from "./Navigation.scss";

export const Navigation = () => (
  <header className={navigation}>
    <Link to="/">&#x25c0;</Link>
  </header>
);
