import React from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Aboutdetail from "./pages/Aboutdetail.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Service.jsx";
import Error from "./pages/Error.jsx";
import Frontend from "./pages/Frontend.jsx";
import Backend from "./pages/Backend.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <div>
      <Nav />

      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/About/:id" element={<Aboutdetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />}>
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
