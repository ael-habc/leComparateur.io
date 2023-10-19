import "./App.css";

//dependencies
import { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import ScrollToTopButton from "./component/ScrollToTopButton";

import logo3 from './assets/images/logo3.png'

// pages
import Home from "./pages/Home";
import Internet from "./pages/Internet";

import CGU from "./pages/CGU";
import Mentions from "./pages/Montion";
import PDP from "./pages/PDP";
import Cookies from "./pages/Cookies";

//images

function App() {
  useEffect(() => {
    document.title = "Meilleur Box"; // Set the new title here

    const faviconElement = document.createElement('link');
    faviconElement.rel = 'icon';
    faviconElement.href = logo3; // Use the imported favicon image as the href
    document.head.appendChild(faviconElement); // Append the link element to the head of the document

    return () => {
      // Cleanup: remove the dynamically added link element when the component is unmounted
      document.head.removeChild(faviconElement);
    };
  }, []);

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
