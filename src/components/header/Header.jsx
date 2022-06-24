import React from "react";
import classes from "./header.module.css";

const Header = ({ hexColor }) => {
  return (
    <header className={classes.title}>
      <h1>Random Color Generator</h1>
      <h3> HexCode: {hexColor} </h3>
    </header>
  );
};

export default Header;
