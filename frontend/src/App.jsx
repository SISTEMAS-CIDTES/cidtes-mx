import React from "react";
import { 
  BrowserRouter as 
  Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Training from "./pages/training/Training.jsx";
import Header from "./components/sections/header/Header.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import "./assets/fontawesome.js";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capacitacion" element={<Training />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;