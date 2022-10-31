import React from "react";
import classes from "./Navbar.module.css";
const Navbutton = (props) => {
  const handle = (event) => {
    props.onHandle(event.target.value);
    console.log(event.target.value);
  };
  return (
    <button className={classes.button} onClick={handle}>
      {props.text}
    </button>
  );
};
export default Navbutton;
