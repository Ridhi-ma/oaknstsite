import React from "react";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Blog from "./Components/Blog/Blog";
import { Routes, Route } from "react-router-dom";
import Blogmainpage from "./Components/Blog/Blogmainpage";
import Privacy from "./Components/CommonCompnents/Privacy";
import Contact from "./Components/contact/Contact";
import Operations from "./Components/Operations/Operations";
import Csr from "./Components/Csr/Csr";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogcontents" element={<Blogmainpage />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Operations" element={<Operations />} />
      <Route path="/Csr" element={<Csr />} />
    </Routes>
  );
}
export default App;
