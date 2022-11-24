import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import Navbar from "../CommonCompnents/Navbar";
import Footer from "../CommonCompnents/Footer";

const Contact = () => {
  const nameto = useRef();
  const emailto = useRef();
  const mobileto = useRef();
  const tickto = useRef();
  const [radio, setradio] = useState(false);
  const [fname, setfname] = useState(false);
  const [email, setemail] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [tick, settick] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
    if (nameto.current.value == "") {
      setfname(true);
    }
    if (!nameto.current.value == "") {
      setfname(false);
    }

    if (
      emailto.current.value == "" ||
      !emailto.current.value.includes("@") ||
      emailto.current.value.length < 6
    ) {
      setemail(true);
    }
    if (
      !emailto.current.value == "" &&
      emailto.current.value.includes("@") &&
      !emailto.current.value.length < 6
    ) {
      setemail(false);
    }

    if (mobileto.current.value == "" || mobileto.current.value.length < 10) {
      setmobile(true);
    }
    if (
      !mobileto.current.value == "" &&
      (mobileto.current.value.length > 9) & 13
    ) {
      setmobile(false);
    }
    if (tickto.current.value == 1) {
      settick(true);
    }
  };
  return (
    <React.Fragment>
      <div className={classes.whole}>
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
          <div className={classes.right}>
            <form onSubmit={onsubmit}>
              <div className={classes.data}>
                <div>
                  <h2>
                    First Name{" "}
                    <span>
                      <img src="/assets/Vector (5).png" />
                    </span>
                  </h2>
                  <input
                    type="text"
                    ref={nameto}
                    className={fname === true ? classes.invalid : ""}
                  />
                </div>
                <div>
                  <h2>Last Name</h2>
                  <input type="text" />
                </div>
                <div>
                  <h2>
                    Email{" "}
                    <span>
                      <img src="/assets/Vector (5).png" />
                    </span>
                  </h2>
                  <input
                    type="text"
                    ref={emailto}
                    className={email === true ? classes.invalid : ""}
                  />
                </div>
                <div>
                  <h2>
                    Mobile{" "}
                    <span>
                      <img src="/assets/Vector (5).png" />
                    </span>
                  </h2>
                  <input
                    type="number"
                    ref={mobileto}
                    className={mobile === true ? classes.invalid : ""}
                  />
                </div>
              </div>
              <div className={classes.type}>
                <h1>What type of services you want? Select below.</h1>
                <div className={classes.radio}>
                  <div>
                    <input type="radio" onChange={() => setradio(!radio)} />
                    <h3>Product Development</h3>
                  </div>
                  <div>
                    <input type="radio" />
                    <h3>Operations Transformation</h3>
                  </div>
                  <div>
                    <input type="radio" />
                    <h3>Other Services </h3>
                  </div>
                  <div>
                    <input type="radio" />
                    <h3>Cloud Transformation</h3>
                  </div>
                  <div>
                    <input type="radio" />
                    <h3>Analytics</h3>
                  </div>
                </div>
                <h2>
                  All fields marked with an asterisk (
                  <span>
                    <img src="/assets/Vector (5).png" />
                  </span>
                  ) are mandatory.
                </h2>
                <div className={classes.meg}>
                  <h1>Message </h1>
                  <input type="text" placeholder="Write your message..." />
                  <div className={classes.l}>
                    <input type="checkbox" ref={tickto} />
                    <h3>I agree to the Privacy Policy and Other T&C.</h3>
                  </div>

                  {/* <div className={classes.btn}>
                    <button>Send Message</button>
                  </div> */}
                </div>
              </div>
            </form>
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
            <div className={classes.images}>
              <div>
                <img src="/assets/Vector (2).png" />
              </div>
              <div>
                <img src="/assets/Vector (3).png" />
              </div>
              <div>
                <img src="/assets/twitter.png" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Contact;
