import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ClinicalResearchCrPvDm from './pages/ClinicalResearchCrPvDm';
import ClinicalResearchMedicalWriting from './pages/ClinicalResearchMedicalWriting';
import ClinicalResearchPharmacovigilance from './pages/ClinicalResearchPharmacovigilance';
import ClinicalResearchRegulatoryAffairs from './pages/ClinicalResearchRegulatoryAffairs';
import Contact from './pages/Contact';
import CourseCrPv from './pages/CourseCrPv';
import Home from './pages/Home';
import Program from './pages/Program';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/clinical-research-cr-pv-dm" element={<ClinicalResearchCrPvDm />} />
        <Route path="/clinical-research-medical-writing" element={<ClinicalResearchMedicalWriting />} />
        <Route path="/clinical-research-pharmacovigilance" element={<ClinicalResearchPharmacovigilance />} />
        <Route path="/clinical-research-regulatory-affairs" element={<ClinicalResearchRegulatoryAffairs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-cr-pv" element={<CourseCrPv />} />
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </Router>
  );
}

export default App;
