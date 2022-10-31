import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src="/assets/logo.png" />
      <div className={classes.solution}>
        <h3>Services</h3>
        <p>Product Development</p>
        <p>Cloud Transformation</p>
        <p>Operations Transformation</p>
        <p>Analytics</p>
      </div>
      <div className={classes.solution}>
        <h3>Company</h3>
        <p>About Us</p>
        <p>Contact</p>
        <p>Private Policy</p>
        <div>
          <img src="/assets/linkedin.png"></img>
          <img src="/assets/twitter.png"></img>
        </div>
      </div>
      <div className={classes.what}>
        <h4>Want to get in touch with us?</h4>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Company Email" />

        <button>Enter</button>
      </div>
    </div>
  );
};
export default Footer;
