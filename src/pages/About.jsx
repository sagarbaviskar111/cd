import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../public/css/StudentSlider.css';
import { BASE_URL } from '../config';

const About = () => {
  const [studentImages, setStudentImages] = useState([]);

  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);
    
    fetch(`${BASE_URL}/api/studentsimg`)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setStudentImages(data);
        }
      })
      .catch(err => console.warn('API Error for student images:', err.message));
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Us | Clinidea Education</title>
        <meta name="description" content="Learn more about Clinidea Education, our expert faculties, and our goal to empower students in Clinical Research and Pharmacovigilance." />
      </Helmet>
      <>
<div className="wrap"></div>
</>

      {studentImages.length > 0 && (
        <section className="ftco-section bg-dark py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 style={{ color: '#fff', fontWeight: '700' }}>Happy Students & Feedback</h2>
              <p style={{ color: '#aaa' }}>Real success stories from our students 🚀</p>
            </div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={25}
              slidesPerView={3}
              loop={true}
              speed={1200}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: '30px' }}
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

      <>
<footer className="footer">
		<div className="container-fluid px-lg-5">
			<div className="row">
				<div className="col-md-9 py-5">
					<div className="row">
						<div className="col-md-4 mb-md-0 mb-4">
							<h2 className="footer-heading">About Clinidea</h2>
							<p>Empowering students with industry insights and career-focused mentorship in Clinical Research, Pharmacovigilance, and Clinical Data Management.</p>
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
    </div>
  );
};

export default About;
