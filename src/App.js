import "./App.css";

//dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import ScrollToTopButton from "./component/ScrollToTopButton";

// pages
import Home from "./pages/Home";
import Internet from "./pages/Internet";

import CGU from "./pages/CGU";
import Mentions from "./pages/Montion";
import PDP from "./pages/PDP";
import Cookies from "./pages/Cookies";

//images

function App() {
  return (
    <main id="main">
      {/* <ScrollToTopButton /> */}
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/montion" element={<Mentions />} />
          <Route path="/pdp" element={<PDP />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
