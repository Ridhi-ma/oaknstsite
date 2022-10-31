import React from "react";
import Navbar from "../CommonCompnents/Navbar";
import Footer from "../CommonCompnents/Footer";
import classes from "./Blog.module.css";
import Blogcontent from "./Blogcontent";
const Blog = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.head}>
        <h1>Post Example</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum.
        </p>
      </div>
      <div className={classes.box}>
        <Blogcontent
          photo="CloudComputing.jpg"
          head="vavzshvsh"
          date="12/23/1001"
          para="lorembnxjxjkdhjkhdxkghjghjcvhjvchjvhcdvv dvcd vh"
          read="Read more"
        />
        <Blogcontent
          photo="mainimg.png"
          head="vavzshvsh"
          date="12/23/1001"
          para="lorembnxjxjkdhjkhdxkghjghjcvhjvchjvhcdvv dvcd vh"
          read="Read more"
        />
        <Blogcontent
          photo="CloudComputing.jpg"
          head="vavzshvsh"
          date="12/23/1001"
          para="lorembnxjxjkdhjkhdxkghjghjcvhjvchjvhcdvv dvcd vh"
          read="Read more"
        />
        <Blogcontent
          photo="mainimg.png"
          head="vavzshvsh"
          date="12/23/1001"
          para="lorembnxjxjkdhjkhdxkghjghjcvhjvchjvhcdvv dvcd vh"
          read="Read more"
        />
        <Blogcontent
          photo="CloudComputing.jpg"
          head="vavzshvsh"
          date="12/23/1001"
          para="lorembnxjxjkdhjkhdxkghjghjcvhjvchjvhcdvv dvcd vh"
          read="Read more"
        />
        <Blogcontent
          photo="mainimg.png"
          head="vavzshvsh"
          date="12/23/1001"
          para="lorembnxjxjkdhjkhdxkghjghjcvhjvchjvhcdvv dvcd vh"
          read="Read more"
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Blog;
