import React from "react";
import classes from "./Csr.module.css";
const Content = (props) => {
  return (
    <div className={classes.enviorment}>
      <h2>
        {props.head}
        <span>
          <img src="/assets/Vector (13).png" />
        </span>
      </h2>
      <p>{props.content}</p>
    </div>
  );
};
export default Content;
