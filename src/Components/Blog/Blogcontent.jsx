import React from "react";
import classes from "./Blog.module.css";
import { Link } from "react-router-dom";
const Blogcontent = (props) => {
  return (
    <div className={classes.blogmain}>
      <img src={"/assets/" + props.photo} alt />
      <div>
        <h4>{props.head}</h4>
        <p>{props.date}</p>
        <p>{props.para}</p>

        <Link to="/blogcontents">
          <h5>{props.read}</h5>
        </Link>
      </div>
    </div>
  );
};
export default Blogcontent;
