import React, { useState } from "react";
import Header from "../header/Header.jsx";

import classes from "./button.module.css";

const Button = () => {
  const [hexColor, setHexColor] = useState("-");

  const buttonClickHandler = () => {
    document.body.style.backgroundColor = hexColor;
    setHexColor(
      `#${Math.floor(Math.random() * 627389356213 + 1)
        .toString(16)
        .substring(0, 8)}`
    );
  };
  return (
    <>
      <Header hexColor={hexColor} />
      <div className={classes["btn-section"]}>
        <button className={classes.btn} onClick={buttonClickHandler}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default Button;
