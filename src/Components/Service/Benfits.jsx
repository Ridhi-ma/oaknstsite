import React from "react";
import classes from "./Benfits.module.css";
const Benefits = (props) => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <img src={"/assets/" + props.photo} />
      </div>
      <div className={classes.bodybottom}>
        <h4>{props.head}</h4>
        <p>{props.body}</p>
      </div>
    </div>
  );
};
export default Benefits;
