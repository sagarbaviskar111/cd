import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../public/css/StudentSlider.css';

const About = () => {
  const [studentImages, setStudentImages] = useState([]);

  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);
    
    fetch('http://localhost:5000/api/studentsimg')
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
      <div dangerouslySetInnerHTML={{ __html: `<div class="wrap"></div>` }} />

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

      <div dangerouslySetInnerHTML={{ __html: `<footer class="footer">
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
    </div>
  );
};

export default About;
