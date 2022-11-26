import React, { useState } from "react";
import Navbar from "../CommonCompnents/Navbar";
import classes from "./Service.module.css";
import Footer from "../CommonCompnents/Footer";
import Where from "./Where";
import Ourservice from "./Ourservice";
import Benefits from "./Benfits";

// importing Link from react-router-dom to navigate to
// different end points.

const Service = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.top}>
        <div className={classes.topcontent}>
          <h2>Cloud Transformation</h2>
          <p>
            Unlock great business value and opportunities
            <br />
            without giving up control of your data.
          </p>
          <button>Get In Touch</button>
        </div>
        <div className={classes.topimage}>
          <img src="./assets/SERVICE MAIN.png" />
        </div>
      </div>
      <div className={classes.main}>
        <p>
          Oaknst provides you with highly secure and scalable cloud solutions
          that guarantee the highest level of data security. We have solutions
          for your needs - whether you are at an early age of deploying your
          migration strategy or want to transform your existing cloud to make it
          comparable with the best.
        </p>
      </div>
      <div className={classes.mainbenifit}>
        <h2>Benefits</h2>
        {/* <img src="./assets/Line 5.png"></img> */}
        <div className={classes.d}>
          <Benefits
            photo={"3arrow.png"}
            head="Scalability"
            body="Our scalable cloud solutions help you cope a large workload while maintaining effectiveness. These will allow your business to grow without having to invest in expensive changes in your IT architecture."
          />
          <Benefits
            photo="delivery.png"
            head="Agility"
            body="Our solutions provide you with greater flexibility and business continuity that allows you to scale up and down quickly basis on your business requirements."
          />
          <Benefits
            photo="lock.png"
            head="Security"
            body="You can take advantage of cloud security technologies such as data encryption and two-factor authentication for greater privacy than you would have when relying on your equipment or servers.
     "
          />
          <Benefits
            photo="share.png"
            head="Accessibility"
            body="Our cloud solutions are accessible to you and your employees anyBenfits, with any device. Anyone can log in to their account and access the updated information from anyBenfits."
          />

          <Benefits
            photo="contact.png"
            head="Availability"
            body="Our solutions offer great availability that ensures the continual function of the cloud infrastructure with little downtime or outages."
          />
          <Benefits
            photo="recycle.png"
            head="Disaster Recovery"
            body="We ensure that your data backups are centralized in data centers, removing the need for individual users or teams to maintain their backups onsite or offsite. It lowers the risk of data loss should any backup fail or be destroyed by a disaster.
    "
          />
          <Benefits
            photo="piggybank.png"
            head="Cost Effective"
            body="Our flexible pricing allows you to test the applications before investing in them. Our solutions don’t require expensive hardware or local data center maintenance."
          />
          <Benefits
            photo="2arrow.png"
            head="Automatic Updates"
            body="With our solutions, you always have access to the latest updates and versions of the software so that you don’t have to wait for long periods for the next update."
          />
        </div>
      </div>
      <div className={classes.services}>
        <h1>Our Services</h1>
        {/* <img src="./assets/Line 5.png"></img> */}
      </div>
      <div className={classes.boxes}>
        <Ourservice
          heading={"Cloud Strategy"}
          content={
            "We partner with you to help build your cloud strategy basis your needs. We start with a diagnostic assessment of your systems and business requirements and then present you with a bouquet of options that can help you achieve scale with the lowest upfront investment."
          }
        />
        <Ourservice
          heading={"Cloud Migration"}
          content={
            "We partner with you to help build your cloud strategy basis your needs. We start with a diagnostic assessment of your systems and business requirements and then present you with a bouquet of options that can help you achieve scale with the lowest upfront investment."
          }
        />
        <Ourservice
          heading={"Cloud App Development"}
          content={
            "We partner with you to help build your cloud strategy basis your needs. We start with a diagnostic assessment of your systems and business requirements and then present you with a bouquet of options that can help you achieve scale with the lowest upfront investment."
          }
        />
        <Ourservice
          heading={"Cloud Security & Risk"}
          content={
            " Our security specialists build custom security integration solutions to secure your data and critical business. We provide a comprehensive security strategy to monitor and detect threats. Our deployment solutions take care of your security concerns – from data protection to risk assessment to security monitoring."
          }
        />
      </div>
      <div className={classes.whole}>
        <div className={classes.bottom}>
          <h2>Who We Serve</h2>
        </div>
        <div className={classes.bott}>
          <Where head="Young Organizations" />
          <Where head="Small & Mid-Size Organizations" />
          <Where head="Family-Owned Businesses" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Service;
