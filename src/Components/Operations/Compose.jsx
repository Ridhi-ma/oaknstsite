import React from "react";
import classes from "./Operations.module.css";
const Compose = (props) => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <img src={"/assets/" + props.photo} />
      </div>
      <div className={classes.bodybottom}>
        <h2>{props.head}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
};
export default Compose;
