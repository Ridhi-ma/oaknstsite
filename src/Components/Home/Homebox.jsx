import React from "react";
import classes from "./Homebox.module.css";
const Homebox = (props) => {
  return (
    <div className={classes.box}>
      <img src={props.photo}></img>
      <h4>{props.heading}</h4>
      <p>{props.content}</p>
    </div>
  );
};
export default Homebox;
