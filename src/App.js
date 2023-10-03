import "./App.css";


//dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import NavBar from "./component/NavBar";


// pages
import Home from "./pages/Home";
import Internet from "./pages/Internet";

//images

function App() {
  return (
    <main id="main">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internet" element={<Internet />} />
        </Routes>
      </Router>

    </main>
  );
}

export default App;
