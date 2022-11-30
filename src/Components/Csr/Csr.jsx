import React from "react";
import Footer from "../CommonCompnents/Footer";
import Navbar from "../CommonCompnents/Navbar";
import classes from "./Csr.module.css";
import Content from "./Content";
const Csr = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.para}>
        <h1>Corporate Social Responsibility</h1>
        <div className={classes.mainimage}>
          <img src="./assets/Vector (11).png"></img>
          <img src="./assets/Vector (12).png"></img>
        </div>
      </div>
      <div className={classes.content}>
        We, at Oaknst, have always believed in Giving Back to Society. As the
        profits of an organization rise, so does its responsibility to help
        society. There are various means by which Oaknst contributes toward its
        Corporate Social Responsibility. Starting right from its employees and
        driving toward the external stakeholders, Oaknst has always been a
        socially responsible entity.
      </div>
      <div className={classes.maincontent}>
        <div className={classes.mcontent}>
          <Content
            head="Enviornment"
            content={
              "Oaknst has voluntary contributed to the improvements of its social and environmental responsibility. It has initiated many social and environment related csr programmes and activities. It has funded and implemented many community development schemes and projects. We have also launched initiatives that includes broader issues such as, biodiversity and climate change."
            }
          />
        </div>
        <div className={classes.mainmiddel}>
          <Content
            head="Enviornment"
            content={
              "Oaknst has voluntary contributed to the improvements of its social and environmental responsibility. It has initiated many social and environment related csr programmes and activities. It has funded and implemented many community development schemes and projects. We have also launched initiatives that includes broader issues such as, biodiversity and climate change."
            }
          />
          <Content
            head="Enviornment"
            content={
              "Oaknst has voluntary contributed to the improvements of its social and environmental responsibility. It has initiated many social and environment related csr programmes and activities. It has funded and implemented many community development schemes and projects. We have also launched initiatives that includes broader issues such as, biodiversity and climate change."
            }
          />
        </div>
        <div className={classes.mcontent}>
          <Content
            head="Enviornment"
            content={
              "Oaknst has voluntary contributed to the improvements of its social and environmental responsibility. It has initiated many social and environment related csr programmes and activities. It has funded and implemented many community development schemes and projects. We have also launched initiatives that includes broader issues such as, biodiversity and climate change."
            }
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Csr;
