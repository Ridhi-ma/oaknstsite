import React from "react";
import classes from "./Contact.module.css";
import Navbar from "../CommonCompnents/Navbar";
import Footer from "../CommonCompnents/Footer";
const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.head}>
        <h1>Contact US</h1>
        <h3>
          Any questions or remarks?
          <br /> Just drop us a message!
        </h3>
        <img src="/assets/Line 6.png"></img>
      </div>
      <div className={classes.container}>
        <div className={classes.data}>
          <div>
            <h2>First Name *</h2>
            <input type="text" />
          </div>
          <div>
            <h2>Last Name</h2>
            <input type="text" />
          </div>
          <div>
            <h2>Email *</h2>
            <input type="text" />
          </div>
          <div>
            <h2>Mobile *</h2>
            <input type="text" />
          </div>
          <h3>What type of services you want? Select below.</h3>
          <div className={classes.radio}>
            <h2>place</h2>
            <input type="radio" />
          </div>
          <h3>All fields marked with an asterisk (*) are mandatory.</h3>
          <div className={classes.meg}>
            <h3>Message </h3>
            <input type="text" placeholder="Write your message..." />
            <h4>I agree to the Privacy Policy and Other T&C.</h4>
            <button>Send Message</button>
          </div>
        </div>
        <div className={classes.abox}>
          <h3>How to Find Us!</h3>
          <h4>
            Fill up the form if you have any questions, and our team will get
            back to you within 24 hours.
          </h4>
          <div>
            <img src="/assets/Rectangle 18.png"></img>
            <h3>info@oaknst.com</h3>
          </div>
          <div>
            <img src="/assets/Vector (4).png"></img>
            <h3>
              Gurgaon, Sec-53, Golf
              <br /> Course Road
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Contact;
