import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../config';

const CourseCrPv = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);

    // Fetch API data
    fetch(`${BASE_URL}/api/courses`)
      .then(res => res.json())
      .then(data => {
        // Find the object with "CRPV" key
        const crpvCourse = data.find(item => item.CRPV);
        if (crpvCourse) {
          setCourseData(crpvCourse.CRPV);
        }
      })
      .catch(err => console.error("Error fetching courses API:", err));
  }, []);

  // Set up dynamic URLs based on fetched data
  const brochureLink = courseData?.pdf ? `${BASE_URL}/${courseData.pdf}` : 'images/advance.pdf';
  const feesLink = courseData?.feesPdf ? `${BASE_URL}/${courseData.feesPdf}` : 'images/payment.pdf';
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

  const youtubeSection = embedUrl ? (
    
    <div className="row justify-content-center mb-5">
      <div className="col-lg-10">
        <div className="cr-module-card p-4" style={{"textAlign":"center"}}>
          <h3 className="mb-4 text-purple-800 font-bold" style={{"fontSize":"1.8rem"}}>Program Overview Video</h3>
          <div className="video-container" style={{"position":"relative","paddingBottom":"56.25%","height":"0","overflow":"hidden","borderRadius":"15px"}}>
            <iframe 
              src="{embedUrl}" 
              style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","border":"0"}} 
              allowFullScreen 
              title="YouTube Video">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
<div className="wrap">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col">
                    <p className="mb-0 phone"><span className="fa fa-phone"></span>
                        <a href="tel:8999213129">+91 8999213129</a>
                        <a href="tel:9370472071">+91 9370472071</a>
                    </p>
                    <p className="mb-0 email"><span className="fa fa-envelope"></span>
                        <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a> |
                        <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
            <a className="navbar-brand" href="/index"><img src="./clinidea-removebg-preview.png" alt="Clinidea Education" style={{"height":"40px","verticalAlign":"middle"}}/> <span className="d-none d-md-inline">Clinidea Education</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item"><a href="/index" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="/program" className="nav-link">Programs</a></li>
                    <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url(images/bg_2.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-9 ftco-animate pb-5">
                    <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/index">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Programs <i className="ion-ios-arrow-forward"></i></span></p>
                    <h1 className="mb-0 bread">Clinical Research &amp; Clinical Data Management</h1>
                </div>
            </div>
        </div>
    </section>

<style>{`
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
  .cr-icon-2 { background: #dcfce7; color: #16a34a; }
  
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
`}</style>

<div className="cr-modern-wrap">
  <div className="container">
    <div className="row mb-5 text-center">
      <div className="col-lg-10 offset-lg-1">
        <span className="cr-header-badge">Premium Certification Program</span>
        <h1 className="cr-title">Advanced Certification Course</h1>
        <h2 className="cr-subtitle">in Clinical Research &amp; Clinical Data Management</h2>
        <p className="cr-desc">A 6-month online, mentor-led program with real projects, live sessions &amp; comprehensive placement support. Become job-ready for exciting roles in top CROs, pharma companies, and hospitals.</p>
      </div>
    </div>

    <div className="row justify-content-center mb-5">
      
      <div className="col-lg-5 col-md-6 mb-4">
        <div className="cr-module-card">
          <div className="cr-icon-box cr-icon-1">
            🔬
          </div>
          <h3 className="cr-module-title">Clinical Research</h3>
          <ul className="cr-list">
            <li>Drug discovery &amp; trial phases (I–IV)</li>
            <li>ICH-GCP, FDA, EMA, Indian GCP</li>
            <li>Protocol dev. &amp; site selection</li>
            <li>ICF, IB, TMF, CRF docs</li>
            <li>Subject recruitment &amp; AE/SAE</li>
            <li>Compliance, audits, SOPs</li>
          </ul>
        </div>
      </div>
      
      <div className="col-lg-5 col-md-6 mb-4">
        <div className="cr-module-card">
          <div className="cr-icon-box cr-icon-2">
            💻
          </div>
          <h3 className="cr-module-title">Clinical Data Management</h3>
          <ul className="cr-list">
            <li>CDM lifecycle &amp; 21 CFR Part 11</li>
            <li>CRF design &amp; EDC tools</li>
            <li>Data entry, validation, queries</li>
            <li>MedDRA, WHO-DD coding</li>
            <li>SAE recon &amp; external data</li>
            <li>CDISC standards &amp; submission</li>
          </ul>
        </div>
      </div>
    </div>

    {youtubeSection}

    
    <div className="row align-items-stretch mb-5">
      <div className="col-lg-6 mb-4">
        <div className="cr-details-box d-flex flex-column justify-content-center">
          <h3 className="mb-4" style={{"fontWeight":"700","fontSize":"1.8rem"}}>Program Details</h3>
          
          <div className="cr-detail-item">
            <div className="cr-detail-icon">⏳</div>
            <div className="cr-detail-text">
              <h4>Duration</h4>
              <p>6 Months</p>
            </div>
          </div>
          
          <div className="cr-detail-item">
            <div className="cr-detail-icon">💻</div>
            <div className="cr-detail-text">
              <h4>Mode</h4>
              <p>100% Online (Live)</p>
            </div>
          </div>
          
          <div className="cr-detail-item">
            <div className="cr-detail-icon">🎓</div>
            <div className="cr-detail-text">
              <h4>Eligibility</h4>
              <p style={{"fontSize":"16px"}}>BPharm, MPharm, Pharm.D, BSc, Biotech &amp; Lifesciences</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-6">
        <div className="cr-outcomes-wrap d-flex flex-column justify-content-center h-100">
          <h3 className="mb-4" style={{"fontWeight":"800","fontSize":"2rem","color":"#1a202c"}}>Career Outcomes</h3>
          
          <div className="cr-outcome-card">
            <div className="cr-outcome-icon">📜</div>
            <div className="cr-outcome-text">
              <h4>Industry Certification</h4>
              <p>Clinical Research &amp; Clinical Data Management</p>
            </div>
          </div>
          
          <div className="cr-outcome-card">
            <div className="cr-outcome-icon">🎯</div>
            <div className="cr-outcome-text">
              <h4>Diverse Opportunities</h4>
              <p>CDM Executive, CRC, Data Validator</p>
            </div>
          </div>
          
          <div className="cr-outcome-card">
            <div className="cr-outcome-icon">💼</div>
            <div className="cr-outcome-text">
              <h4>Placement Support</h4>
              <p>Mock Interviews, Real Projects &amp; Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="row">
      <div className="col-12">
        <div className="cr-cta-wrap">
          <h3 className="mb-5" style={{"fontSize":"2.2rem","fontWeight":"800","color":"#2d3748"}}>Ready to Accelerate Your Career?</h3>
          <div className="d-flex flex-wrap justify-content-center">
            <a href={enrollLink} target="_blank" rel="noopener noreferrer" className="cr-btn cr-btn-primary">
              <span className="cr-btn-icon">🚀</span> Enroll Now
            </a>
            <a href={brochureLink} download target="_blank" rel="noopener noreferrer" className="cr-btn cr-btn-secondary">
              <span className="cr-btn-icon">📄</span> Download Brochure
            </a>
            <a href={feesLink} download target="_blank" rel="noopener noreferrer" className="cr-btn cr-btn-secondary">
              <span className="cr-btn-icon">💳</span> Fees Details
            </a>
            <a href={whatsappGrpLink} target="_blank" rel="noopener noreferrer" className="cr-btn cr-btn-whatsapp">
              <span className="cr-btn-icon">💬</span> Join WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

    <footer className="footer">
        <div className="container-fluid px-lg-5">
            <div className="row">
                <div className="col-md-9 py-5">
                    <div className="row">
                        <div className="col-md-4 mb-md-0 mb-4">
                            <h2 className="footer-heading">About Clinidea</h2>
                            <p>Empowering students with industry insights and career-focused mentorship in Clinical Research, Pharmacovigilance, and Clinical Data Management.</p>
                        </div>
            <div className="col-md-4 mb-md-0 mb-4">
              <h2 className="footer-heading">Programs</h2>
              <ul className="list-unstyled">
                <li><a href="/course-cr-pv" className="py-1 d-block">Clinical Research & Pharmacovigilance</a></li>
                <li><a href="/course-cr-pv-cdm" className="py-1 d-block">Clinical Research & Data Management</a></li>
                <li><a href="/clinical-research-cr-pv-dm" className="py-1 d-block">Clinical Research, Pharmacovigilance & Data Management</a></li>
                <li><a href="/course-cr-regulatory" className="py-1 d-block">Clinical Research & Regulatory Affairs</a></li>
                <li><a href="/clinical-research-medical-writing" className="py-1 d-block">Clinical Research & Medical Writing</a></li>
                <li><a href="/program" className="py-1 d-block">All Programs</a></li>
              </ul>
            </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <h2 className="footer-heading">Contact</h2>
                            <ul className="list-unstyled">
                                <li><a href="mailto:clinideaeducation@gmail.com" className="py-1 d-block">clinideaeducation@gmail.com</a></li>
                                <li><a href="tel:9370472071" className="py-1 d-block">9370472071</a></li>
                                <li><a href="tel:8999213129" className="py-1 d-block">8999213129</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</>
  );
};

export default CourseCrPv;
