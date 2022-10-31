import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../CommonCompnents/Footer";
import Navbar from "../CommonCompnents/Navbar";
import classes from "./Blogmainpage.module.css";
const Blogmainpage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.head}>
        <h1>Heading</h1>
        <h2>Lorem by:</h2>
        <div className={classes.i}>
          <img src="./assets/linkedin.png"></img>
          <img src="./assets/twitter.png"></img>
        </div>
        <div className={classes.read}>
          <img src="/assets/CloudComputing.jpg"></img>
          <p>
            Lorem ipsum dolor Lorem ipsum dolor sit amet. Ut laudantium adipisci
            et animi dolorum et neque error aut maxime nesciunt. Vel recusandae
            ducimus At dolorem iste id magni quam id corrupti officiis At minus
            minus et quidem rerum! 33 nihil quas aut consequatur asperiores est
            <br />
            sunt illo et sunt commodi. Non magni quisquam ex possimus ducimus id
            fuga dicta et obcaecati blanditiis sed quidem sint est molestiae ea
            quam corrupti. Nam itaque quae et ratione error vel possimus sunt!
            Qui cupiditate quae ut magnam veritatis vel nemo dolores id
            aspernatur deleniti sed itaque aut odio placeat. Lorem ipsum dolor
            sit amet Eum aperiam facilis aut deleniti ipsa At aspernatur nisi
            quo corporis assumenda non dolores rerum ad velit porro rem nulla
            reprehenderit. Non repudiandae harum ut harum laudantium et
            <br />
            veritatis eaque et nesciunt voluptas ad aliquam aliquam non nemo
            voluptas. Sit molestiae doloribus At nemo repudiandae et reiciendis
            autem cum culpa optio ex ipsum eius et accusantium omnis At neque
            quaerat. Non magni quisquam Eum aperiam facilis Id quibusdam
            corporis et voluptate minus Qui internos impedit vel unde Lorem
            ipsum dolor Id quibusdam corporis et voluptate minus aut veniam
            quasi a magni incidunt in fuga distinctio et sunt autem et dolore
            <br />
            dolor. Quo explicabo quidem aut esse suscipit ea inventore quia non
            nulla laborum non quia nemo est pariatur qui temporibus molestiae!
            Aut corporis distinctio ut aliquam eveniet et perferendis voluptate
            qui repellat quia. Est architecto assumenda cum ipsam architecto aut
            mollitia perferendis aut illum ullam ab praesentium animi.
          </p>
        </div>
        {/* <div className={classes.i}>
          <img src="./assets/linkedin.png"></img>
          <img src="./assets/twitter.png"></img>
        </div> */}
      </div>

      <Footer />
    </React.Fragment>
  );
};
export default Blogmainpage;
