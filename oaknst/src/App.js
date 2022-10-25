import Navbar from "./Components/Navbar";
import React from "react";
import classes from "./App.module.css";
import Home from "./Components/Home";
function App() {
  return (
    <div className={classes.main}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
