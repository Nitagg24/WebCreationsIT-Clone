import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from './pages/Homepage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Blog from './pages/ServicesPage';
import Contact from './pages/ContactPage';
import OurClientsPage from "./pages/OurClientsPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-clients" element={<OurClientsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
