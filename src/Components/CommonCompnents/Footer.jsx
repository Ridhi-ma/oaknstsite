import React from "react";
import { useRef, useState } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const inputo = useRef();
  const emailto = useRef();
  const [invalid, setInvalid] = useState(false);
  const formHandler = (event) => {
    event.preventDefault();
    console.log(inputo);
    if (inputo.current.value === "" && emailto.current.value === "") {
      inputo.current.attributes.placeholder.nodeValue = " Please Enter Data";
      emailto.current.attributes.placeholder.nodeValue =
        " Please Enter Your Email id:";
    }
    if (inputo.current.value === "") {
      inputo.current.style.border = "1px solid red";
      inputo.current.attributes.placeholder.nodeValue = " Please Enter Data";
    }
    if (emailto.current.value === "") {
      console.log(emailto.current.style.focus);
      emailto.current.style.border = "1px solid red";
      emailto.current.attributes.placeholder.nodeValue =
        " Please Enter Your Email id:";
    }
    if (
      !emailto.current.value.includes("@") &&
      !emailto.current.value.length < 6
    ) {
      emailto.current.style.border = "1px solid red";
      console.log(emailto.current.value.length);
      setInvalid(true);
    }
    if (
      emailto.current.value.includes("@") &&
      emailto.current.value.length > 6
    ) {
      emailto.current.style.border = "";
      setInvalid(false);
      console.log("hello");
    }
  };
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
        <Link to="/Contact">
          <p>Contact</p>
        </Link>
        <Link to="/Privacy">
          <p>Privacy Policy</p>
        </Link>
        <div>
          <img src="/assets/linkedin.png"></img>
          <img src="/assets/twitter.png"></img>
        </div>
      </div>
      <div className={classes.what}>
        <h4>Want to get in touch with us?</h4>
        <form onSubmit={formHandler}>
          <input type="text" placeholder="Name" ref={inputo} />
          <input type="text" placeholder="Company Email" ref={emailto} />
          {invalid && (
            <label style={{ color: "red" }}>Enter correct email id</label>
          )}
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
};
export default Footer;
