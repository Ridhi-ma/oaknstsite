import React from "react";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Blog from "./Components/Blog/Blog";
import { Routes, Route } from "react-router-dom";
import Blogmainpage from "./Components/Blog/Blogmainpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogcontents" element={<Blogmainpage />} />
    </Routes>
  );
}
export default App;
