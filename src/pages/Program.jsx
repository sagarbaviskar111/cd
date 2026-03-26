import React, { useEffect } from 'react';

const Program = () => {
  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);
  }, []);

  return (
    <>
<div className="wrap">
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

	</div>
	<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div className="container">
			<a className="navbar-brand" href="/index"><img src="./clinidea-removebg-preview.png" alt="Clinidea Education" style={{"height":"40px","verticalAlign":"middle"}}/> <span className="d-none d-md-inline">Clinidea Education</span></a>
			<form action="#" className="searchform order-sm-start order-lg-last">
				<div className="form-group d-flex">
					<input type="text" className="form-control pl-3" placeholder="Search" />
					<button type="submit" placeholder="" className="form-control search"><span
							className="fa fa-search"></span></button>
				</div>
			</form>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="fa fa-bars"></span> Menu
			</button>
			<div className="collapse navbar-collapse" id="ftco-nav">
				<ul className="navbar-nav m-auto">
					<li className="nav-item"><a href="/index" className="nav-link">Home</a></li>
					<li className="nav-item"><a href="/about" className="nav-link">About</a></li>
					<li className="nav-item active"><a href="/program" className="nav-link">Programs</a></li>
					
					<li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
	
	<section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}
		data-stellar-background-ratio="0.5">
		<div className="overlay"></div>
		<div className="container">
			<div className="row no-gutters slider-text align-items-end">
				<div className="col-md-9 ftco-animate pb-5">
					<p className="breadcrumbs mb-2"><span className="mr-2"><a href="/index">Home <i
									className="ion-ios-arrow-forward"></i></a></span> <span>Programs <i
								className="ion-ios-arrow-forward"></i></span></p>
					<h1 className="mb-0 bread">Services</h1>
				</div>
			</div>
		</div>
	</section>

	<section className="ftco-section">
		
		<div className="row justify-content-center pb-5 mb-3">
			<div className="col-md-8 heading-section text-center ftco-animate">
				<h2>Clinidea Education Advanced Certification Course</h2>
				<span className="subheading">Transforming Aspirations into Careers</span>
			</div>
		</div>

		
		<div className="course-cards-container">

			
			<div className="course-card">
				<div className="card-image" style={{ backgroundImage: 'url(images/pharmacovigilance.jpg)' }}></div>
				<div className="card-content">
					<h3>Clinical Research & Pharmacovigilance</h3>
					<p>Learn drug safety, AE reporting, MedDRA coding, signal detection, and global PV regulations in a
						6-month
						live mentorship program.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/course-cr-pv" className="btn-course">View Details</a>
				</div>
			</div>



			
			<div className="course-card">
				<div className="card-image" style={{ backgroundImage: 'url(images/combined_course.jpg)' }}></div>
				<div className="card-content">
					<h3>Clinical Research &amp; Data Management</h3>
					<p>Get 3-in-1 expertise for Clinical Research, Pharmacovigilance & Data Management, perfect for
						multidisciplinary career growth.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/course-cr-pv-cdm" className="btn-course">View Details</a>
				</div>
			</div>


			
			<div className="course-card">
				<div className="card-image" style={{ backgroundImage: 'url(images/combined_course.jpg)' }}></div>
				<div className="card-content">
					<h3>Clinical Research, Pharmacovigilance &amp; Data Management</h3>
					<p>A comprehensive 6-month program covering Clinical Research, Drug Safety and Clinical Data Management.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/clinical-research-cr-pv-dm" className="btn-course">View Details</a>
				</div>
			</div>


			
			<div className="course-card">
				<div className="card-image" style={{ backgroundImage: 'url(images/regulatory_affairs.jpg)' }}></div>
				<div className="card-content">
					<h3>Clinical Research & Regulatory Affairs</h3>
					<p>Explore regulatory pathways, global guidelines, NDA submissions, and compliance strategies in a
						6-month
						mentorship program.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/course-cr-regulatory" className="btn-course">View Details</a>
				</div>
			</div>


			
			<div className="course-card">
				<div className="card-image" style={{ backgroundImage: 'url(images/medical_writing.jpg)' }}></div>
				<div className="card-content">
					<h3>Clinical Research & Medical Writing</h3>
					<p>Master protocol writing, CSR creation, scientific manuscripts, and regulatory documents in this
						6-month
						live online program.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/course-cr-medical-writing" className="btn-course">View Details</a>
				</div>
			</div>


		</div>
	</section>

	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center pb-5 mb-3">
				<div className="col-md-7 heading-section text-center ftco-animate">
					<h2>We can help you build your career</h2>
					<span className="subheading">We offer Mentorship Programs</span>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
					<div className="d-block text-center">
						<div className="icon d-flex justify-content-center align-items-center">
							<span className="flaticon-goal"></span>
						</div>
						<div className="media-body p-2 mt-3">
							<h3 className="heading">Career Guidance</h3>
							<p>We help you craft an impressive CV, optimize your LinkedIn profile, and master job
								interviews to land your dream role in clinical research and life sciences.</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
					<div className="d-block text-center">
						<div className="icon d-flex justify-content-center align-items-center">
							<span className="flaticon-stress"></span>
						</div>
						<div className="media-body p-2 mt-3">
							<h3 className="heading">Industry Knowledge</h3>
							<p>Our mentors provide in-depth insights into clinical research, pharmacovigilance, and
								clinical data management, ensuring you’re job-ready with relevant knowledge.</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
					<div className="d-block text-center">
						<div className="icon d-flex justify-content-center align-items-center">
							<span className="flaticon-crm"></span>
						</div>
						<div className="media-body p-2 mt-3">
							<h3 className="heading">Networking Opportunities</h3>
							<p>We provide opportunities to connect with professionals in the industry, helping you
								expand your network and gain valuable industry contacts.</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
					<div className="d-block text-center">
						<div className="icon d-flex justify-content-center align-items-center">
							<span className="flaticon-marriage"></span>
						</div>
						<div className="media-body p-2 mt-3">
							<h3 className="heading">Mock Interviews</h3>
							<p>Our mock interview sessions help you develop confidence, prepare for behavioral
								interviews, and gain insights from hiring managers to stand out in the job market.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section className="ftco-section bg-light">
		<div className="container">
			<div className="row justify-content-center pb-5 mb-3">
				<div className="col-md-7 heading-section text-center ftco-animate">
					<h2>Why Clinidea Education Works?</h2>
					<span className="subheading">Key Benefits of Our Program</span>
				</div>
			</div>


				<div className="row">
					<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div className="d-block text-center">
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="flaticon-account"></span>
							</div>
							<div className="media-body p-2 mt-3">
								<h3 className="heading">Accountability</h3>
								<p>Stay focused and motivated with personalized mentorship and expert guidance tailored
									to your career goals in clinical research, pharmacovigilance, and data management.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div className="d-block text-center">
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="flaticon-skills"></span>
							</div>
							<div className="media-body p-2 mt-3">
								<h3 className="heading">Expertise</h3>
								<p>Learn from industry professionals. Gain real-world knowledge that aligns with
									employer expectations in the life sciences sector.</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div className="d-block text-center">
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="flaticon-performance"></span>
							</div>
							<div className="media-body p-2 mt-3">
								<h3 className="heading">Speed</h3>
								<p>Accelerate your career path by gaining job-ready skills and knowledge that employers
									are actively looking for in clinical research and life sciences.</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
						<div className="d-block text-center">
							<div className="icon d-flex justify-content-center align-items-center">
								<span className="flaticon-event"></span>
							</div>
							<div className="media-body p-2 mt-3">
								<h3 className="heading">Career Delivery</h3>
								<p>Receive continuous mentorship, interview preparation, and job placement support until
									you secure your first role in the industry.</p>
							</div>
						</div>
					</div>
				</div>

		</div>
	</section>

	<footer className="footer">
		<div className="container-fluid px-lg-5">
			<div className="row">
				<div className="col-md-9 py-5">
					<div className="row">
						<div className="col-md-4 mb-md-0 mb-4">
							<h2 className="footer-heading">About Clinidea</h2>
							<p>Empowering students with industry insights and career-focused mentorship in Clinical
								Research, Pharmacovigilance, and Clinical Data Management.</p>
							<ul className="ftco-footer-social p-0">
								<li className="ftco-animate"><a href="#" title="LinkedIn"><span
											className="fa fa-linkedin"></span></a></li>
								<li className="ftco-animate"><a href="#" title="Email"><span
											className="fa fa-envelope"></span></a></li>
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
								<li><a href="mailto:clinideaeducation@gmail.com"
										className="py-1 d-block">clinideaeducation@gmail.com</a></li>
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

export default Program;
