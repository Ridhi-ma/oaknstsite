import React from "react";
import Footer from "../CommonCompnents/Footer";
import Navbar from "../CommonCompnents/Navbar";
import classes from "./Operations.module.css";
import Compose from "./Compose";
const Operations = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.i}>
        <div className={classes.operations}>
          <h1>Operations Transformation</h1>
          <h3>Maximize your Operational Capabilities</h3>
          <button> Get In Touch</button>
        </div>
        <div className={classes.topimage}>
          <img src="./assets/Vector (6).png" />
        </div>
      </div>
      <div className={classes.whole}>
        <div className={classes.para}>
          Our impactful operations transformation solutions reimagine the inner
          workings of your organization to propel growth. By developing new
          capabilities and enhancing your current processes, we assist you in
          realizing the full potential of your operations.
        </div>
        <div className={classes.benefits}>
          <h1>Benefits</h1>
          <div className={classes.kahani}>
            <div className={classes.content}>
              <img src="./assets/piggybank.png"></img>
              <h3>Reduce Operating Expenses</h3>
              <p>
                Save significant time and money on operating expenses by
                transforming your operations with the help of process changes
                and technology
              </p>
            </div>
            <div className={classes.co}>
              <img src="./assets/2arrow.png"></img>
              <h3>Increase Customer Loyalty</h3>
              <p>
                Save significant time and money on operating expenses by
                transforming your operations with the help of process changes
                and technology
              </p>
            </div>
            <div className={classes.con}>
              <img src="./assets/Vector (10).png"></img>
              <h3>Gain Market Share</h3>
              <p>
                Save significant time and money on operating expenses by
                transforming your operations with the help of process changes
                and technology
              </p>
            </div>
          </div>
        </div>
        <div className={classes.service}>
          <h1> Our Services</h1>
          <div className={classes.d}>
            <Compose
              photo={"Vector (8).png"}
              head="Operations Diagnostic"
              body="Assess current operations system with the help of Industry KPIs and data-driven process mining and analyses.
            "
            />
            <Compose
              photo={"Vector (8).png"}
              head="Roadmap to Future"
              body="Develop a long-term operation structure that’s integrated with the business aspirations.
            "
            />
            <Compose
              photo={"Vector (8).png"}
              head="Process Upgrades"
              body="Develop corporate processes across different facets – business strategy, talent, finance & IT that support an integrated operation's goal.


            "
            />
            <Compose
              photo={"Vector (8).png"}
              head="Implementation"
              body="Plan & implement the changes with continuous support & refinements as required by the changing business scenarios


            "
            />
          </div>
        </div>
        <div className={classes.whom}>
          <h1>Whom We Serve</h1>
          <div className={classes.v}>
            <div className={classes.w}>
              <h3>Small & Mid-Size Organizations</h3>
            </div>
            <div className={classes.h}>
              <h3>Small & Mid-Size Organizations</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Operations;
