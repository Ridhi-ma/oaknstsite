import React from "react";
import { useRef, useState } from "react";
import classes from "./Footer.module.css";
import { useNavigate, Link } from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
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
  const homehandler = () => {
    window.scroll(0, 0);
    navigate("/");
  };
  const servicehandler = () => {
    window.scroll(0, 0);
    navigate("/Services");
  };
  const contacthandler = () => {
    window.scroll(0, 0);
    navigate("/contact");
  };
  return (
    <React.Fragment>
      <div className={classes.wh}>
        <div className={classes.footer}>
          <div className={classes.ima}>
            <img src="/assets/logo.png" />
          </div>
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
        <div className={classes.mobile}>
          <div>
            <img src="/assets/home.png" onClick={homehandler} />
            <p onClick={homehandler}>Products</p>
          </div>
          <div>
            <img src="/assets/package.png" onClick={servicehandler} />
            <p onClick={servicehandler}>Service</p>
          </div>
          <div>
            <img src="/assets/news.png" />
            <p>News</p>
          </div>

          <div>
            <img src="/assets/support.png" onClick={contacthandler} />
            <p onClick={contacthandler}>Contact us</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
