import React, { useState } from "react";

function Dropdownm() {
  const [show, setShow] = useState(false);
  const display = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <React.Fragment>
      <button onClick={display}>Hello</button>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aperiam mollitia ad harum saepe quae aut, voluptates doloribus magnam
          fugiat eum omnis sit ipsa, animi est quam quisquam modi et.
        </p>
      )}
    </React.Fragment>
  );
}
export default Dropdownm;
