import React from "react";
import Footer from "../CommonCompnents/Footer";
import Navbar from "../CommonCompnents/Navbar";
import classes from "./Csr.module.css";
const Csr = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.para}>
        <h1>Corporate Social Responsibility</h1>
      </div>
      <div className={classes.content}>
        We, at Oaknst, have always believed in Giving Back to Society. As the
        profits of an organization rise, so does its responsibility to help
        society. There are various means by which Oaknst contributes toward its
        Corporate Social Responsibility. Starting right from its employees and
        driving toward the external stakeholders, Oaknst has always been a
        socially responsible entity.
      </div>
      <div className={classes.box}>
        <h2>Environment</h2>
        <p>
          Oaknst has voluntary contributed to the improvements of its social and
          environmental responsibility. It has initiated many social and
          environment related csr programmes and activities. It has funded and
          implemented many community development schemes and projects. We have
          also launched initiatives that includes broader issues such as,
          biodiversity and climate change.
        </p>
      </div>
      <div className={classes.text}>
        <div className={classes.b}>
          <h2>Environment</h2>
          <p>
            Oaknst has voluntary contributed to the improvements of its social
            and environmental responsibility. It has initiated many social and
            environment related csr programmes and activities. It has funded and
            implemented many community development schemes and projects. We have
            also launched initiatives that includes broader issues such as,
            biodiversity and climate change.
          </p>
        </div>
        <div className={classes.bo}>
          <h2>Environment</h2>
          <p>
            Oaknst has voluntary contributed to the improvements of its social
            and environmental responsibility. It has initiated many social and
            environment related csr programmes and activities. It has funded and
            implemented many community development schemes and projects. We have
            also launched initiatives that includes broader issues such as,
            biodiversity and climate change.
          </p>
        </div>
      </div>
      <div className={classes.j}>
        <h2>Environment</h2>
        <p>
          Oaknst has voluntary contributed to the improvements of its social and
          environmental responsibility. It has initiated many social and
          environment related csr programmes and activities. It has funded and
          implemented many community development schemes and projects. We have
          also launched initiatives that includes broader issues such as,
          biodiversity and climate change.
        </p>
      </div>

      <Footer />
    </React.Fragment>
  );
};
export default Csr;
