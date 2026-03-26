import React, { useEffect, useState } from 'react';

const ClinicalResearchMedicalWriting = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);

    // Fetch API data
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => {
        // Find the object with "CRMW" key
        const crmwCourse = data.find(item => item.CRMW);
        if (crmwCourse) {
          setCourseData(crmwCourse.CRMW);
        }
      })
      .catch(err => console.error("Error fetching courses API:", err));
  }, []);

  // Set up dynamic URLs based on fetched data
  const brochureLink = courseData?.pdf ? `http://localhost:5000/${courseData.pdf}` : 'images/IB.pdf';
  const feesLink = courseData?.feesPdf ? `http://localhost:5000/${courseData.feesPdf}` : 'images/payment.pdf';
  const enrollLink = courseData?.enrollGoogleLink || courseData?.registerLink || 'https://docs.google.com/forms/d/e/1FAIpQLSeKvwixBD4xlWkEka-rZRHQ9YGdjTHwwvDpig4AP2AJptG-2Q/viewform?usp=header';
  const whatsappGrpLink = courseData?.whatsappLink || 'https://chat.whatsapp.com/FdjVRzRkl9e9OLi3ItW6SZ';

  // Helper to parse YouTube link and convert to embed format
  const getEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const embedUrl = getEmbedUrl(courseData?.youtubeLink);

  const youtubeSection = embedUrl ? `
    <!-- Video Section -->
    <div class="row justify-content-center mb-5">
      <div class="col-lg-10">
        <div class="cr-module-card p-4" style="text-align:center;">
          <h3 class="mb-4 text-purple-800 font-bold" style="font-size:1.8rem;">Program Overview Video</h3>
          <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px;">
            <iframe 
              src="${embedUrl}" 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" 
              allowfullscreen="" 
              title="YouTube Video">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  ` : '';

  return (
    <div dangerouslySetInnerHTML={{ __html: `<div class="wrap">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col">
                    <p class="mb-0 phone"><span class="fa fa-phone"></span>
                        <a href="tel:8999213129">+91 8999213129</a>
                        <a href="tel:9370472071">+91 9370472071</a>
                    </p>
                    <p class="mb-0 email"><span class="fa fa-envelope"></span>
                        <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a> |
                        <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
            <a class="navbar-brand" href="/index"><img src="./clinidea-removebg-preview.png" alt="Clinidea Education" style="height:40px; vertical-align:middle;"/> <span class="d-none d-md-inline">Clinidea Education</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item"><a href="/index" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="/program" class="nav-link">Programs</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs mb-2"><span class="mr-2"><a href="/index">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Programs <i class="ion-ios-arrow-forward"></i></span></p>
                    <h1 class="mb-0 bread">Clinical Research &amp; Medical Writing</h1>
                </div>
            </div>
        </div>
    </section>

<style>
  .cr-modern-wrap {
    background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
    padding: 80px 0;
    color: #333;
    font-family: 'Poppins', sans-serif;
  }
  .cr-header-badge {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 20px;
  }
  .cr-title {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 20px;
    background: linear-gradient(to right, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .cr-subtitle {
    font-size: 2rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 30px;
  }
  .cr-desc {
    font-size: 1.15rem;
    color: #4a5568;
    max-width: 800px;
    margin: 0 auto 50px;
    line-height: 1.8;
  }
  .cr-module-card {
    background: #fff;
    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .cr-module-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 5px;
    background: linear-gradient(to right, #667eea, #764ba2);
    z-index: -1;
    transition: opacity 0.3s;
  }
  .cr-module-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }
  .cr-icon-box {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 25px;
  }
  .cr-icon-1 { background: #e0f2fe; color: #0284c7; }
  .cr-icon-2 { background: #f3e8ff; color: #9333ea; }
  .cr-icon-3 { background: #fee2e2; color: #dc2626; }
  
  .cr-module-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 20px;
  }
  .cr-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .cr-list li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    color: #4a5568;
    font-weight: 500;
    line-height: 1.6;
  }
  .cr-list li::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    top: 0;
    color: #48bb78;
    font-weight: bold;
    font-size: 18px;
  }
  
  .cr-details-box {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    border-radius: 20px;
    padding: 40px;
    color: #fff;
    margin-top: 60px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    height: 100%;
  }
  .cr-detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .cr-detail-icon {
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-right: 20px;
  }
  .cr-detail-text h4 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #a0aec0;
    font-weight: 600;
  }
  .cr-detail-text p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }
  
  .cr-outcomes-wrap {
    padding-top: 60px;
    padding-left: 2rem;
  }
  @media (max-width: 991px) {
    .cr-outcomes-wrap { padding-left: 0; padding-top: 20px; }
    .cr-details-box { margin-top: 20px; }
  }
  .cr-outcome-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }
  .cr-outcome-card:hover {
    border-color: #cbd5e0;
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  }
  .cr-outcome-icon {
    font-size: 30px;
    margin-right: 20px;
  }
  .cr-outcome-text h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #2d3748;
  }
  .cr-outcome-text p {
    margin: 0;
    color: #718096;
    font-size: 0.9rem;
  }
  
  .cr-cta-wrap {
    margin-top: 60px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 30px;
    padding: 50px;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  }
  .cr-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 35px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none !important;
    transition: all 0.3s;
    margin: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  .cr-btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff !important;
    border: none;
  }
  .cr-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(118, 75, 162, 0.4);
  }
  .cr-btn-secondary {
    background: #fff;
    color: #667eea !important;
    border: 2px solid #e2e8f0;
  }
  .cr-btn-secondary:hover {
    border-color: #667eea;
    background: #f7fafc;
    transform: translateY(-3px);
  }
  .cr-btn-whatsapp {
    background: #25D366;
    color: #fff !important;
    border: none;
  }
  .cr-btn-whatsapp:hover {
    background: #128C7E;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
  }
  .cr-btn-icon {
    margin-right: 10px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    .cr-title {
      font-size: 2.5rem;
    }
    .cr-subtitle {
      font-size: 1.5rem;
    }
    .cr-desc {
      font-size: 1rem;
    }
    .cr-details-box {
      padding: 30px 20px;
    }
    .cr-cta-wrap {
      padding: 30px 20px;
    }
    .cr-btn {
      width: 100%;
      margin: 10px 0;
    }
  }
</style>

<div class="cr-modern-wrap">
  <div class="container">
    <div class="row mb-5 text-center">
      <div class="col-lg-10 offset-lg-1">
        <span class="cr-header-badge">Premium Certification Program</span>
        <h1 class="cr-title">Advanced Certification Course</h1>
        <h2 class="cr-subtitle">in Clinical Research &amp; Medical Writing</h2>
        <p class="cr-desc">A comprehensive 6-month live online certification designed for students and professionals seeking a rewarding career. Get hands-on exposure to essential documents, global guidelines, and real-world writing assignments guided by industry mentors.</p>
      </div>
    </div>

    <div class="row justify-content-center mb-5">
      <!-- Module 1 -->
      <div class="col-lg-5 col-md-6 mb-4">
        <div class="cr-module-card">
          <div class="cr-icon-box cr-icon-1">
            🔬
          </div>
          <h3 class="cr-module-title">Clinical Research </h3>
          <ul class="cr-list">
            <li>Drug Development Process &amp; Trial Phases</li>
            <li>ICH-GCP, FDA, EMA &amp; Indian GCP Guidelines</li>
            <li>Protocol Design &amp; Trial Start-Up</li>
            <li>Key Trial Documents (ICF, CRF, IB, TMF)</li>
            <li>Monitoring Visits &amp; AE/SAE Reporting</li>
            <li>SOPs, Compliance, CAPA &amp; Audit Prep</li>
          </ul>
        </div>
      </div>
      <!-- Module 2 -->
      <div class="col-lg-5 col-md-6 mb-4">
        <div class="cr-module-card">
          <div class="cr-icon-box cr-icon-2">
            ✍️
          </div>
          <h3 class="cr-module-title">Medical Writing</h3>
          <ul class="cr-list">
            <li>Medical Writing Basics &amp; Document Types</li>
            <li>Trial Documents (Protocols, CSRs, IBs)</li>
            <li>Regulatory Writing (IND, NDA, CTD/eCTD)</li>
            <li>Safety Writing (Narratives, PSUR, RMP)</li>
            <li>Scientific Writing (Abstracts, Manuscripts)</li>
            <li>Writing Standards: AMA, ICMJE, GPP3</li>
          </ul>
        </div>
      </div>
    </div>

    ${youtubeSection}

    <!-- Details and Outcomes -->
    <div class="row align-items-stretch mb-5">
      <div class="col-lg-6 mb-4">
        <div class="cr-details-box d-flex flex-column justify-content-center">
          <h3 class="mb-4" style="font-weight:700; font-size:1.8rem;">Program Details</h3>
          
          <div class="cr-detail-item">
            <div class="cr-detail-icon">⏳</div>
            <div class="cr-detail-text">
              <h4>Duration</h4>
              <p>6 Months</p>
            </div>
          </div>
          
          <div class="cr-detail-item">
            <div class="cr-detail-icon">💻</div>
            <div class="cr-detail-text">
              <h4>Mode</h4>
              <p>100% Online (Live)</p>
            </div>
          </div>
          
          <div class="cr-detail-item">
            <div class="cr-detail-icon">🎓</div>
            <div class="cr-detail-text">
              <h4>Eligibility</h4>
              <p style="font-size:16px;">BPharm, MPharm, Pharm.D, BSc, MSc, MBBS &amp; Life Sciences</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <div class="cr-outcomes-wrap d-flex flex-column justify-content-center h-100">
          <h3 class="mb-4" style="font-weight:800; font-size:2rem; color:#1a202c;">Career Outcomes</h3>
          
          <div class="cr-outcome-card">
            <div class="cr-outcome-icon">📜</div>
            <div class="cr-outcome-text">
              <h4>Dual Certification</h4>
              <p>Clinical Research + Medical Writing</p>
            </div>
          </div>
          
          <div class="cr-outcome-card">
            <div class="cr-outcome-icon">🎯</div>
            <div class="cr-outcome-text">
              <h4>Diverse Opportunities</h4>
              <p>Medical Writer, CRA, CTA, Safety Writer</p>
            </div>
          </div>
          
          <div class="cr-outcome-card">
            <div class="cr-outcome-icon">💼</div>
            <div class="cr-outcome-text">
              <h4>Placement Support</h4>
              <p>Mock Interviews &amp; Resume Enhancement</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="row">
      <div class="col-12">
        <div class="cr-cta-wrap">
          <h3 class="mb-5" style="font-size:2.2rem; font-weight:800; color:#2d3748;">Ready to Accelerate Your Career?</h3>
          <div class="d-flex flex-wrap justify-content-center">
            <a href="${enrollLink}" target="_blank" rel="noopener noreferrer" class="cr-btn cr-btn-primary">
              <span class="cr-btn-icon">🚀</span> Enroll Now
            </a>
            <a href="${brochureLink}" download target="_blank" rel="noopener noreferrer" class="cr-btn cr-btn-secondary">
              <span class="cr-btn-icon">📄</span> Download Brochure
            </a>
            <a href="${feesLink}" download target="_blank" rel="noopener noreferrer" class="cr-btn cr-btn-secondary">
              <span class="cr-btn-icon">💳</span> Fees Details
            </a>
            <a href="${whatsappGrpLink}" target="_blank" rel="noopener noreferrer" class="cr-btn cr-btn-whatsapp">
              <span class="cr-btn-icon">💬</span> Join WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

    <footer class="footer">
        <div class="container-fluid px-lg-5">
            <div class="row">
                <div class="col-md-9 py-5">
                    <div class="row">
                        <div class="col-md-4 mb-md-0 mb-4">
                            <h2 class="footer-heading">About Clinidea</h2>
                            <p>Empowering students with industry insights and career-focused mentorship in Clinical Research, Pharmacovigilance, and Clinical Data Management.</p>
                        </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Programs</h2>
              <ul class="list-unstyled">
                <li><a href="/course-cr-pv" class="py-1 d-block">Clinical Research & Pharmacovigilance</a></li>
                <li><a href="/course-cr-pv-cdm" class="py-1 d-block">Clinical Research & Data Management</a></li>
                <li><a href="/clinical-research-cr-pv-dm" class="py-1 d-block">Clinical Research, Pharmacovigilance & Data Management</a></li>
                <li><a href="/course-cr-regulatory" class="py-1 d-block">Clinical Research & Regulatory Affairs</a></li>
                <li><a href="/clinical-research-medical-writing" class="py-1 d-block">Clinical Research & Medical Writing</a></li>
                <li><a href="/program" class="py-1 d-block">All Programs</a></li>
              </ul>
            </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <h2 class="footer-heading">Contact</h2>
                            <ul class="list-unstyled">
                                <li><a href="mailto:clinideaeducation@gmail.com" class="py-1 d-block">clinideaeducation@gmail.com</a></li>
                                <li><a href="tel:9370472071" class="py-1 d-block">9370472071</a></li>
                                <li><a href="tel:8999213129" class="py-1 d-block">8999213129</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>` }} />
  );
};

export default ClinicalResearchMedicalWriting;
