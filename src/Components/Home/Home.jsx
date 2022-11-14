import React from "react";
import classes from "./Home.module.css";
import Footer from "../CommonCompnents/Footer";
import Homebox from "./Homebox";
import Navbar from "../CommonCompnents/Navbar";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.main}>
        <Navbar />
        <div className={classes.home}>
          <div className={classes.content}>
            <h1>VISUALIZE | AUTOMATE | INNOVATE</h1>
            <p className={classes.text}>Achieve your ambition</p>
            <button className={classes.button}>Get In Touch</button>
          </div>
          <div className={classes.imgmain}></div>
        </div>
      </div>
      <div className={classes.dos}>
        <h3>What We Do</h3>
        <div className={classes.do}>
          <Homebox
            photo="/assets/cloud.png"
            heading="Cloud Consulting"
            content="Our Cloud Consulting team at Oaknst provides you with highly secure and scalable cloud solutions. We have solutions for all your needs – whether you are at an early age of deploying your migration strategy or are already in the process of Cloud transitioning."
          />
          <Homebox
            photo="/assets/robotics.png"
            heading="Automation"
            content="We at Oaknst combine RPA services with artificial intelligence and other technologies to streamline your workflows and processes, and to help you achieve productivity and efficiency.
            We help you discover the best automation opportunities to mitigate unanticipated risks.
            "
          />
          <Homebox
            photo="/assets/profile.png"
            heading="Staffing and Training"
            content="Oaknst finds the right people with the right skills and competencies for you. We cater to all your unique, seasonal, and temporary IT staffing needs and requirements. Our services stretch from onsite contract staffing to offsite to offshore services."
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
