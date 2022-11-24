import React, { useState } from "react";

// import logo from "../assets/logo.png";
import classes from "./Navbar.module.css";
// import linkedin from "../assets/linkedin.png";
import Navbutton from "./Navbutton";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [shower, setShower] = useState(false);
  const display = () => {
    setShow(!show);
    if (shower == true) {
      setShower(!shower);
    } else {
      setShower(shower);
    }
    if (show == true) {
    }
    console.log(show);
  };
  const display2 = () => {
    if (show == true) {
      setShow(!show);
    } else {
      setShow(show);
    }
    setShower(!shower);
  };
  return (
    <div className={classes.nav}>
      <div className={classes.ph}>
        <img src="/assets/logo.png" />
      </div>
      <div className={classes.pages}>
        <Link to="/">
          <Navbutton text="Home " />
        </Link>

        <div>
          <Navbutton text="Services ▾" onHandle={display} />
          {show && (
            <div className={classes.s}>
              <div>Product Development</div>
              <Link to="/services">
                <div>Cloud Transformation</div>
              </Link>
              <Link to="/Operations">
                <div>Operations Transformation</div>
              </Link>
              <div>Analytics</div>
            </div>
          )}
        </div>
        <Link to="/Contact">
          <Navbutton text="Product" />
        </Link>

        <Link to="/Contact">
          <Navbutton text="CSR" />
        </Link>

        <Link to="/Contact">
          <Navbutton text="Contact" />
        </Link>
        <div>
          <Navbutton text="Resources ▾" onHandle={display2} />
          {shower && (
            <div className={classes.s}>
              <Link to="/blogs">
                <div>Blog</div>
              </Link>
              <div>Free Resources</div>
            </div>
          )}
        </div>
      </div>
      {/* <div className={classes.k}>
        <img src="/assets/linkedin.png" />
        <img src="/assets/twitter.png" />
      </div> */}
    </div>
  );
};
export default Navbar;
