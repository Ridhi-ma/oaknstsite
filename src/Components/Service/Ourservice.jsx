import React from "react";
import classes from "./Service.module.css";
const Ourservice = (props) => {
  return (
    <div className={classes.our}>
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
};
export default Ourservice;
