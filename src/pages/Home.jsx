import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../../public/css/StudentSlider.css";

const Home = () => {

  const [admissionData, setAdmissionData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [studentImages, setStudentImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/admissionopen')
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          setAdmissionData(data);
        }
      })
      .catch(err => console.warn("API Error for admission:", err.message));

    fetch('http://localhost:5000/api/eventbanner')
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          setEventData(data);
        }
      })
      .catch(err => console.warn("API Error for event banner:", err.message));

    fetch('http://localhost:5000/api/studentsimg')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setStudentImages(data);
        }
      })
      .catch(err => console.warn("API Error for student images:", err.message));
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{
        __html: `<div class="wrap">
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
            <a class="navbar-brand" href="/index"><span class="brand-text">Clinidea <span class="brand-accent">Education</span></span></a>
      <form action="#" class="searchform order-sm-start order-lg-last">
        <div class="form-group d-flex">
          <input type="text" class="form-control pl-3" placeholder="Search" aria-label="Search">
          <button type="submit" class="form-control search"><span class="fa fa-search"></span></button>
        </div>
      </form>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item active"><a href="/index" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="/program" class="nav-link">Programs</a></li>
          <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END nav -->

  <div class="hero-wrap">
    <div class="home-slider owl-carousel">
      <div class="slider-item" style="background-image:url(images/bg_1.jpg);" role="img"
        aria-label="Mentorship transforming aspirations">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-10 ftco-animate">
              <div class="text w-100 text-center">
                <h2>Mentorship That Transforms Aspirations into Careers</h2>
                <h1 class="mb-4">Your Gateway to a Successful Career in Life Sciences</h1>
                <div class="hero-ctas">
                  <a href="https://chat.whatsapp.com/Iq1pCFeC7CN8AJN9O71pLh" class="btn btn-green mx-2" target="_blank">Join Our WhatsApp Group</a>
                  <a href="#courseSection" class="btn btn-white mx-2">Find Course</a>
                  <a href="#RecentPlacement" class="btn btn-white mx-2">Recent Placement</a>
                  <a href="/contact" class="btn btn-white mx-2">Upcoming Batches</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item" style="background-image:url(images/bg_2.jpg);" role="img"
        aria-label="Bridging education and industry">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-10 ftco-animate">
              <div class="text w-100 text-center">
                <h2>Bridging the Gap Between Education & Industry</h2>
                <h1 class="mb-4">Get Personalized Mentorship & Job-Ready Skills</h1>
                <!-- <p><a href="/programs" class="btn btn-white">Explore Our Programs</a></p> -->
                <div class="hero-ctas">
                  <a href="https://chat.whatsapp.com/Iq1pCFeC7CN8AJN9O71pLh" class="btn btn-green mx-2" target="_blank">Join Our WhatsApp Group</a>
                  <a href="#courseSection" class="btn btn-white mx-2">Find Course</a>
                  <a href="#RecentPlacement" class="btn btn-white mx-2">Recent Placement</a>
                  <a href="/contact" class="btn btn-white mx-2">Upcoming Batches</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item" style="background-image:url(images/bg_3.jpg);" role="img"
        aria-label="Empowering you with knowledge">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-10 ftco-animate">
              <div class="text w-100 text-center">
                <h2>Welcome to Clinidea Education</h2>
                <h1 class="mb-4">Empowering You with Knowledge, Skills & Confidence</h1>
                <div class="hero-ctas">
                  <a href="https://chat.whatsapp.com/Iq1pCFeC7CN8AJN9O71pLh" class="btn btn-green mx-2" target="_blank">Join Our WhatsApp Group</a>
                  <a href="#courseSection" class="btn btn-white mx-2">Find Course</a>
                  <a href="#RecentPlacement" class="btn btn-white mx-2">Recent Placement</a>
                  <a href="/contact" class="btn btn-white mx-2">Upcoming Batches</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="intro py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="intro-box w-100 d-flex">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-phone"></span>
            </div>
            <div class="text pl-3">
              <h4 class="mb-0">Call us: +91 9370472071</h4>
              <h4 class="mb-0">Call us: +91 8999213129</h4>
              <span>Email: <a href="mailto:clinideaeducation@gmail.com">clinideaeducation@gmail.com</a></span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="intro-box w-100 d-flex">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-clock-o"></span>
            </div>
            <div class="text pl-3">
              <h4 class="mb-0">Program Schedule</h4>
              <span>Flexible Online Sessions to Fit Your Needs</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="intro-box w-100">
            <p class="mb-0"><a href="/contact" class="btn btn-primary">Join Our Program</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  ` }} />

      {admissionData && (
        <section className="ftco-section banner-section" style={{ background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)', color: 'white', padding: '5em 0', marginBottom: '3em' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 ftco-animate">
                <span className="subheading d-block mb-2" style={{ color: '#00d2ff', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{admissionData.subheading || 'Next Batch Announcement'}</span>
                <h2 className="mb-3 text-white" style={{ fontWeight: 800, fontSize: '2.5rem' }}>{admissionData.title || 'Admissions Open for New Batch!'}</h2>
                <p className="mb-4" style={{ fontSize: '1.15em', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{admissionData.description}</p>
                <div className="p-4 mb-4" style={{ color: '#222', background: 'rgba(255,255,255,0.95)', borderRadius: '12px', display: 'inline-block', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                  <ul className="list-unstyled mb-0" style={{ fontSize: '1.1rem' }}>
                    <li className="mb-3 border-bottom pb-2"><span className="fa fa-calendar mr-3" style={{ color: '#4b6cb7', fontSize: '1.3rem', width: '25px', textAlign: 'center' }}></span> <strong>Batch Start Date:</strong> {admissionData.batchDate}</li>
                    <li><span className="fa fa-clock-o mr-3" style={{ color: '#4b6cb7', fontSize: '1.3rem', width: '25px', textAlign: 'center' }}></span> <strong>Time:</strong> {admissionData.time}</li>
                  </ul>
                </div>
                <br />
                <a href={admissionData.formLink || admissionData.link || 'https://docs.google.com/forms/'} className="btn btn-primary py-3 px-5" style={{ borderRadius: '50px', fontWeight: 700, background: '#00d2ff', color: '#182848', border: 'none', fontSize: '1.1rem', boxShadow: '0 5px 15px rgba(0, 210, 255, 0.4)' }} target="_blank" rel="noreferrer">Register Now <span className="fa fa-arrow-right ml-2"></span></a>
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center ftco-animate mt-5 mt-md-0">
                <div className="img-wrap w-100" style={{ border: '10px solid rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#ff0055', color: 'white', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', zIndex: 10, fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(255,0,85,0.4)' }}>{admissionData.badgeText || 'Limited Seats!'}</div>
                  <img src={admissionData.imageUrl || 'images/combined_course.jpg'} alt="New Batch Info" className="img-fluid w-100 banner-img" style={{ objectFit: 'cover', height: '380px', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {eventData && (
        <section className="ftco-section pt-5 pb-5" style={{ backgroundColor: '#f4f6f9' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="d-md-flex align-items-center bg-white" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                  <div className="col-md-5 p-0">
                    <img src={eventData.imageUrl || 'images/bg_2.jpg'} alt="Upcoming Event" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100%', minHeight: '350px' }} />
                  </div>
                  <div className="col-md-7 p-5">
                    <span className="badge mb-3" style={{ backgroundColor: '#ff0055', color: 'white', padding: '8px 18px', fontSize: '0.85rem', fontWeight: 700, borderRadius: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}><span className="fa fa-bolt mr-2"></span> {eventData.badgeText || 'Upcoming Webinar'}</span>
                    <h3 className="mb-3" style={{ fontWeight: 800, color: '#182848', fontSize: '1.8rem', lineHeight: 1.3 }}>{eventData.eventName || eventData.title}</h3>
                    <p className="mb-4" style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.6 }}>{eventData.description}</p>

                    <div className="d-flex flex-wrap mb-4">
                      <div className="mr-4 mb-2">
                        <div style={{ background: '#eef2ff', padding: '12px 20px', borderRadius: '10px', color: '#4b6cb7', fontWeight: 700 }}>
                          <span className="fa fa-calendar mr-2"></span> {eventData.date}
                        </div>
                      </div>
                      <div className="mb-2">
                        <div style={{ background: '#eef2ff', padding: '12px 20px', borderRadius: '10px', color: '#4b6cb7', fontWeight: 700 }}>
                          <span className="fa fa-clock-o mr-2"></span> {eventData.time}
                        </div>
                      </div>
                    </div>

                    <a href={eventData.link || eventData.formLink || '#'} className="btn btn-primary py-3 px-5" style={{ background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)', border: 'none', fontWeight: 700, borderRadius: '50px', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(75, 108, 183, 0.3)', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Register Now <span className="fa fa-arrow-right ml-2"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div dangerouslySetInnerHTML={{
        __html: `<section id="courseSection" className="ftco-section">
    <!-- <div class="container"> -->
      <div class="row justify-content-center pb-5 mb-3">
        <div class="col-md-8 heading-section text-center ftco-animate">
          <h2>Clinidea Education Advanced Certification Course</h2>
          <span class="subheading">Transforming Aspirations into Careers</span>
        </div>
      </div>

      <!-- <div class="course-card"> -->
      <div class="course-cards-container">

        <!-- Course 1 -->
        <div class="course-card">
          <div class="card-image" style="background-image: url('images/pharmacovigilance.jpg');"></div>
          <div class="card-content">
            <h3>Clinical Research & Pharmacovigilance</h3>
            <p>Learn drug safety, AE reporting, MedDRA coding, signal detection, and global PV regulations in a 6-month
              live mentorship program.</p>
            <ul>
              <li>📅 Duration: 6 Months</li>
              <li>🌐 100% Live Online</li>
              <li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
              <li>💼 100% Placement Support</li>
            </ul>
            <a href="/clinical-research-pharmacovigilance" class="btn-course">View Details</a>
          </div>
        </div>



        <!-- Course 2 -->
        <div class="course-card">
          <div class="card-image" style="background-image: url('images/combined_course.jpg');"></div>
          <div class="card-content">
            <h3>Clinical Research &amp; Data Management</h3>
            <p>Get 3-in-1 expertise for Clinical Research, Pharmacovigilance & Data Management, perfect for
              multidisciplinary career growth.</p>
            <ul>
              <li>📅 Duration: 6 Months</li>
              <li>🌐 100% Live Online</li>
              <li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
              <li>💼 100% Placement Support</li>
            </ul>
            <a href="/course-cr-pv" class="btn-course">View Details</a>
          </div>
        </div>

        <!-- New combined course: Clinical Research, Pharmacovigilance & Data Management -->
        <div class="course-card">
          <div class="card-image" style="background-image: url('images/combined_course.jpg');"></div>
          <div class="card-content">
            <h3>Clinical Research, Pharmacovigilance &amp; Data Management</h3>
            <p>A comprehensive program covering Clinical Research, Pharmacovigilance and Data Management for
              multidisciplinary career growth.</p>
            <ul>
              <li>📅 Duration: 6 Months</li>
              <li>🌐 100% Live Online</li>
              <li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
              <li>💼 100% Placement Support</li>
            </ul>
            <a href="/clinical-research-cr-pv-dm" class="btn-course">View Details</a>
          </div>
        </div>

        <!-- clinical-research-medical-writing.html -->

        <!-- Course 3 -->
        <div class="course-card">
          <div class="card-image" style="background-image: url('images/regulatory_affairs.jpg');"></div>
          <div class="card-content">
            <h3>Clinical Research & Regulatory Affairs</h3>
            <p>Explore regulatory pathways, global guidelines, NDA submissions, and compliance strategies in a 6-month
              mentorship program.</p>
            <ul>
              <li>📅 Duration: 6 Months</li>
              <li>🌐 100% Live Online</li>
              <li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
              <li>💼 100% Placement Support</li>
            </ul>
            <a href="/clinical-research-regulatory-affairs" class="btn-course">View Details</a>
          </div>
        </div>


        <!-- Course 4 -->
        <div class="course-card">
          <div class="card-image" style="background-image: url('images/medical_writing.jpg');"></div>
          <div class="card-content">
            <h3>Clinical Research & Medical Writing</h3>
            <p>Master protocol writing, CSR creation, scientific manuscripts, and regulatory documents in this 6-month
              live online program.</p>
            <ul>
              <li>📅 Duration: 6 Months</li>
              <li>🌐 100% Live Online</li>
              <li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
              <li>💼 100% Placement Support</li>
            </ul>
            <a href="/clinical-research-medical-writing" class="btn-course">View Details</a>
          </div>
        </div>

      </div>
  </section>

  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center pb-5 mb-3">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <h2>We can help you build your career</h2>
          <span class="subheading">We offer Mentorship Programs</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div class="d-block text-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="flaticon-goal"></span>
            </div>
            <div class="media-body p-2 mt-3">
              <h3 class="heading">Career Guidance</h3>
              <p>We help you craft an impressive CV, optimize your LinkedIn profile, and master job interviews to land
                your dream role in clinical research and life sciences.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div class="d-block text-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="flaticon-stress"></span>
            </div>
            <div class="media-body p-2 mt-3">
              <h3 class="heading">Industry Knowledge</h3>
              <p>Our mentors provide in-depth insights into clinical research, pharmacovigilance, and clinical data
                management, ensuring you’re job-ready with relevant knowledge.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div class="d-block text-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="flaticon-crm"></span>
            </div>
            <div class="media-body p-2 mt-3">
              <h3 class="heading">Networking Opportunities</h3>
              <p>We provide opportunities to connect with professionals in the industry, helping you expand your network
                and gain valuable industry contacts.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div class="d-block text-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="flaticon-marriage"></span>
            </div>
            <div class="media-body p-2 mt-3">
              <h3 class="heading">Mock Interviews</h3>
              <p>Our mock interview sessions help you develop confidence, prepare for behavioral interviews, and gain
                insights from hiring managers to stand out in the job market.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
		<div class="container">
			<div class="row justify-content-center pb-5 mb-3">
				<div class="col-md-7 heading-section text-center ftco-animate">
					<h2>Why Clinidea Education Works?</h2>
					<span class="subheading">Key Benefits of Our Program</span>
				</div>
			</div>


				<div class="row">
					<div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div class="d-block text-center">
							<div class="icon d-flex justify-content-center align-items-center">
								<span class="flaticon-account"></span>
							</div>
							<div class="media-body p-2 mt-3">
								<h3 class="heading">Accountability</h3>
								<p>Stay focused and motivated with personalized mentorship and expert guidance tailored
									to your career goals in clinical research, pharmacovigilance, and data management.
								</p>
							</div>
						</div>
					</div>

					<div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div class="d-block text-center">
							<div class="icon d-flex justify-content-center align-items-center">
								<span class="flaticon-skills"></span>
							</div>
							<div class="media-body p-2 mt-3">
								<h3 class="heading">Expertise</h3>
								<p>Learn from industry professionals. Gain real-world knowledge that aligns with
									employer expectations in the life sciences sector.</p>
							</div>
						</div>
					</div>

					<div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div class="d-block text-center">
							<div class="icon d-flex justify-content-center align-items-center">
								<span class="flaticon-performance"></span>
							</div>
							<div class="media-body p-2 mt-3">
								<h3 class="heading">Speed</h3>
								<p>Accelerate your career path by gaining job-ready skills and knowledge that employers
									are actively looking for in clinical research and life sciences.</p>
							</div>
						</div>
					</div>

					<div class="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div class="d-block text-center">
							<div class="icon d-flex justify-content-center align-items-center">
								<span class="flaticon-event"></span>
							</div>
							<div class="media-body p-2 mt-3">
								<h3 class="heading">Career Delivery</h3>
								<p>Receive continuous mentorship, interview preparation, and job placement support until
									you secure your first role in the industry.</p>
							</div>
						</div>
					</div>
				</div>

		</div>
	</section>
 ` }} />

      {studentImages.length > 0 && (
        <section className="ftco-section bg-dark py-5">
          <div className="container">

            <div className="text-center mb-5">
              <h2 style={{ color: "#fff", fontWeight: "700" }}>
                Happy Students & Feedback
              </h2>
              <p style={{ color: "#aaa" }}>
                Real success stories from our students 🚀
              </p>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={25}
              slidesPerView={3}
              loop={true}
              speed={1200} // smooth animation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                1000: { slidesPerView: 3 }
              }}
            >
              {studentImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="student-card">
                    <img src={img} alt={`student-${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </section>
      )}

      <footer className="footer">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-md-9 py-5">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">About Clinidea</h2>
                  <p>Empowering students with industry insights and career-focused mentorship in Clinical Research,
                    Pharmacovigilance, and Clinical Data Management.</p>
                  <ul className="ftco-footer-social p-0">
                    <li className="ftco-animate"><a href="#" title="LinkedIn"><span className="fa fa-linkedin"></span></a></li>
                    <li className="ftco-animate"><a href="#" title="Email"><span className="fa fa-envelope"></span></a></li>
                  </ul>
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
                    <li><a href="mailto:clinideaeducation@gmail.com" className="py-1 d-block">clinideaeducation@gmail.com</a>
                    </li>
                    <li><a href="tel:9370472071" className="py-1 d-block">9370472071</a></li>

                    <li><a href="tel:8999213129" className="py-1 d-block">8999213129</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
