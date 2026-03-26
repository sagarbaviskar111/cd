import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const About = lazy(() => import('./pages/About'));
const ClinicalResearchCrPvDm = lazy(() => import('./pages/ClinicalResearchCrPvDm'));
const ClinicalResearchMedicalWriting = lazy(() => import('./pages/ClinicalResearchMedicalWriting'));
const ClinicalResearchPharmacovigilance = lazy(() => import('./pages/ClinicalResearchPharmacovigilance'));
const ClinicalResearchRegulatoryAffairs = lazy(() => import('./pages/ClinicalResearchRegulatoryAffairs'));
const Contact = lazy(() => import('./pages/Contact'));
const CourseCrPv = lazy(() => import('./pages/CourseCrPv'));
const Home = lazy(() => import('./pages/Home'));
const Program = lazy(() => import('./pages/Program'));

function App() {
  return (
    <HelmetProvider>
      <Router>
      <Suspense fallback={<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',fontSize:'1.5rem',color:'#667eea',fontFamily:'sans-serif'}}>Loading Clinical Programs...</div>}>
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
      </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
