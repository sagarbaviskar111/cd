import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `<div class="wrap">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <p class="mb-0 phone">
            <span class="fa fa-phone"></span>
            <a href="tel:8999213129">+91 8999213129</a>
            <a href="tel:9370472071">+91 9370472071</a>
          </p>
          <p class="mb-0 email">
            <span class="fa fa-envelope"></span>
            <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a> |
            <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ✅ FIXED NAVBAR WITH BOOTSTRAP 5 DATA ATTRIBUTES -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
    <div class="container">
  <a class="navbar-brand" href="/index"><span class="brand-text">Clinidea <span class="brand-accent">Education</span></span></a>
      <form action="#" class="searchform order-sm-start order-lg-last">
        <div class="form-group d-flex">
          <input type="text" class="form-control pl-3" placeholder="Search" />
          <button type="submit" placeholder="" class="form-control search">
            <span class="fa fa-search"></span>
          </button>
        </div>
      </form>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item"><a href="/index" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="/program" class="nav-link">Programs</a></li>
          <li class="nav-item active"><a href="/contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  

  <!-- ✅ YOUR CONTACT SECTION SAME AS BEFORE -->
  <div class="container py-5 contact">
    <div class="bg-light p-5 rounded shadow text-center">
      <h1 class="mb-4">Contact Clinidea</h1>
      <p class="mb-4">Reach out, follow us, or join our community. We’re just a click away!</p>

      <div class="row g-4 justify-content-center">
        <!-- Phone Card -->
        <div class="col-md-4">
          <div class="contact-card p-4 text-center" style="transform-style:preserve-3d;">
            <div class="icon-circle bg-primary mb-3" style="margin:0 auto;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 16.5v3a1.5 1.5 0 0 1-1.64 1.49C11.27 20.68 3.32 12.73 2.01 4.64A1.5 1.5 0 0 1 3.5 3h3a1.5 1.5 0 0 1 1.45 1.18l.5 2a1.5 1.5 0 0 1-.36 1.35L7.27 9.9a11.06 11.06 0 0 0 7.83 7.83l1.18-1.83a1.5 1.5 0 0 1 1.35-.36l2 .5A1.5 1.5 0 0 1 21 16.5z" fill="#fff"/></svg>
            </div>
            <h5>Call Us</h5>
            <p class="mb-3">Mon — Sat, 9:00 — 18:00</p>
            <p class="mb-3"><a href="tel:+919370472071" class="d-block">+91 9370472071</a><a href="tel:+918999213129" class="d-block">+91 8999213129</a></p>
            <a href="tel:+919370472071" class="btn-3d btn-3d--whatsapp" aria-label="Call now">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18"><path d="M20.52 3.48A11.93 11.93 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.93.51 3.72 1.4 5.3L.5 23.5l7.47-2.04A11.93 11.93 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.86-.49-3.6-1.98-5.02zM12 20.5c-1.86 0-3.6-.5-5.06-1.4l-.36-.21-4.44 1.21 1.21-4.33-.24-.36A8.53 8.53 0 013.5 11c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5S16.69 20.5 12 20.5z"/></svg>
              Call Now
            </a>
          </div>
        </div>

        <!-- Social Card -->
        <div class="col-md-4">
          <div class="contact-card p-4 text-center" style="transform-style:preserve-3d;">
            <div class="icon-circle bg-primary mb-3" style="margin:0 auto;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#fff"/></svg>
            </div>
            <h5>Follow Us</h5>
            <p class="mb-3">Join our socials for updates, free resources and community events.</p>
            <div class="follow-group flex-column">
              <a href="https://wa.me/919370472071" target="_blank" class="btn-3d btn-3d--whatsapp social-btn" aria-label="WhatsApp">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.93 11.93 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.93.51 3.72 1.4 5.3L.5 23.5l7.47-2.04A11.93 11.93 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.86-.49-3.6-1.98-5.02zM12 20.5c-1.86 0-3.6-.5-5.06-1.4l-.36-.21-4.44 1.21 1.21-4.33-.24-.36A8.53 8.53 0 013.5 11c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5S16.69 20.5 12 20.5z"/></svg>
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/company/clinidea-education" target="_blank" class="btn-3d btn-3d--linkedin social-btn" aria-label="LinkedIn">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h3.98V24H.5zM8.5 8.5h3.82v2.11h.05c.53-1 1.83-2.11 3.77-2.11 4.03 0 4.77 2.65 4.77 6.09V24h-3.98v-7.41c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24H8.5z"/></svg>
                LinkedIn
              </a>
              <a id="ig-link" href="https://www.instagram.com/clinidea.education?igsh=MTVvcm9uaWRudTM2bA==" target="_blank" class="btn-3d btn-3d--instagram social-btn" aria-label="Instagram">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0116.5 4z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <!-- Email Card -->
        <div class="col-md-4">
          <div class="contact-card p-4 text-center" style="transform-style:preserve-3d;">
            <div class="icon-circle bg-primary mb-3" style="margin:0 auto;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#fff"/></svg>
            </div>
            <h5>Email Us</h5>
            <p class="mb-3">We'll get back within 24 hours on working days.</p>
            <p class="mb-3"><a href="mailto:clinideaeducation@gmail.com" class="d-block">clinideaeducation@gmail.com</a></p>
            <a href="mailto:clinideaeducation@gmail.com" class="btn-3d btn-3d--group" aria-label="Email us">
              📧 Email Us
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-4">
        <a href="https://chat.whatsapp.com/FdjVRzRkl9e9OLi3ItW6SZ" target="_blank" class="btn-3d btn-3d--group" aria-label="Join WhatsApp Group">
          📲 Join Our WhatsApp Group
        </a>
      </div>

      <p class="mt-3">Or visit us at: <a href="mailto:clinideaeducation@gmail.com" class="text-primary">clinideaeducation@gmail.com</a></p>
    </div>
  </div>

  <!-- ✅ FOOTER SAME AS YOUR CODE -->
  <footer class="footer">
    <div class="container-fluid px-lg-5">
      <div class="row">
        <div class="col-md-9 py-5">
          <div class="row">
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">About Clinidea</h2>
              <p>Empowering students with industry insights and career-focused mentorship in Clinical Research, Pharmacovigilance, and Clinical Data Management.</p>
              <ul class="ftco-footer-social p-0">
                <li class="ftco-animate"><a href="#" title="LinkedIn"><span class="fa fa-linkedin"></span></a></li>
                <li class="ftco-animate"><a href="#" title="Email"><span class="fa fa-envelope"></span></a></li>
              </ul>
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

export default Contact;
