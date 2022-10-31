import React from "react";
import classes from "./Service.module.css";
const Where = (props) => {
  return (
    <div className={classes.where}>
      <div className={classes.container}>
        <img src="/assets/buildings.png" alt="hello" />
      </div>
      <h4>{props.head}</h4>
    </div>
  );
};
export default Where;
