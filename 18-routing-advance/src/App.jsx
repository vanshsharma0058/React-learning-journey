import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Kid from "./pages/kid";
import Trends from "./pages/Trends";
import Trenddetailed from "./pages/trenddetailed";
import Nav2 from "./components/Nav2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Trends" element={<Trends />} />
        {/* Dynamic Routing */}
        <Route path="/Trends/:id" element={<Trenddetailed />} />

        {/* Nested Routing */}
        <Route path="/Contact" element={<Contact />}>
          <Route path="Men" element={<Mens />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kid" element={<Kid />} />
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
