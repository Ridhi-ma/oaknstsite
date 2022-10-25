import React from "react";
import classes from "./Navbar.module.css";
const Navbutton = (props) => {
  return <button className={classes.button}>{props.text}</button>;
};
export default Navbutton;
