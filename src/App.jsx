import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CandidateInfo from "./Pages/CandidateInfo";
import { CandidateProvider } from "./Components/CandidateContext";

function App() {
  return (
    <CandidateProvider>
      <Router>
        <div className="bg-gray-100 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="candidate/:id" element={<CandidateInfo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CandidateProvider>
  );
}

export default App;
