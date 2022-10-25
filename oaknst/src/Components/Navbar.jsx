import React from "react";
import logo from "../assets/logo.png";
import classes from "./Navbar.module.css";
import linkedin from "../assets/linkedin.png";
import Navbutton from "./Navbutton";
import twitter from "../assets/twitter.png";
const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src={logo} />
      <div className={classes.pages}>
        <Navbutton text="Home" />
        <Navbutton text="Services" />
        <Navbutton text="Product" />
        <Navbutton text="Contact" />
        <Navbutton text="Blog" />
      </div>
      <div>
        <img src={linkedin} />
        <img src={twitter} />
      </div>
    </div>
  );
};
export default Navbar;
