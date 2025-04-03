import React from "react";
import { 
  BrowserRouter as 
  Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Training from "./pages/training/Training.jsx";
import Energy from "./pages/energy/Energy.jsx";
import Discover from "./pages/discover/Discover.jsx";
import EvaluationProcess from "./pages/evaluation-process/EvaluationProcess.jsx";
import WhereCanIGetCertified from "./pages/where-can-i-get-certified/WhereCanIGetCertified.jsx";
import OfferedStandards from "./pages/offered-standards/OfferedStandards.jsx";
import Consulting from "./pages/consulting/Consulting.jsx";
import ResearchAndDevelopment1 from "./pages/research-and-development-1/ResearchAndDevelopment1.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import Header from "./components/sections/header/Header.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import "./assets/fontawesome.js";
import "./assets/styles/reset.css";
import "./assets/styles/animations.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<Consulting />} />
        <Route path="/certificacion/conocer" element={<Discover />} />
        <Route path="/certificacion/proceso-de-evaluacion" element={<EvaluationProcess />} />
        <Route path="/certificacion/donde-puedo-certificarme" element={<WhereCanIGetCertified />} />
        <Route path="/certificacion/estandares-ofertados" element={<OfferedStandards />} />
        <Route path="/investigacion-y-desarrollo/1" element={<ResearchAndDevelopment1 />} />
        <Route path="/capacitacion" element={<Training />} />
        <Route path="/capacitacion/energia" element={<Energy />} />
        <Route path="/contacto" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};      

export default App;