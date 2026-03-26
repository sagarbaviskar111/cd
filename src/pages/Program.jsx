import React, { useEffect } from 'react';

const Program = () => {
  useEffect(() => {
    if (window.initializeTheme) window.initializeTheme(window.jQuery);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `<div class="wrap">
		<div class="wrap">
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

	</div>
	<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container">
			<a class="navbar-brand" href="/index"><img src="./clinidea-removebg-preview.png" alt="Clinidea Education" style="height:40px; vertical-align:middle;"/> <span class="d-none d-md-inline">Clinidea Education</span></a>
			<form action="#" class="searchform order-sm-start order-lg-last">
				<div class="form-group d-flex">
					<input type="text" class="form-control pl-3" placeholder="Search">
					<button type="submit" placeholder="" class="form-control search"><span
							class="fa fa-search"></span></button>
				</div>
			</form>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="fa fa-bars"></span> Menu
			</button>
			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav m-auto">
					<li class="nav-item"><a href="/index" class="nav-link">Home</a></li>
					<li class="nav-item"><a href="/about" class="nav-link">About</a></li>
					<li class="nav-item active"><a href="/program" class="nav-link">Programs</a></li>
					<!-- <li class="nav-item"><a href="/careerPath" class="nav-link">Career Paths</a></li>
					<li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li> -->
					<li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- END nav -->
	<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');"
		data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="container">
			<div class="row no-gutters slider-text align-items-end">
				<div class="col-md-9 ftco-animate pb-5">
					<p class="breadcrumbs mb-2"><span class="mr-2"><a href="/index">Home <i
									class="ion-ios-arrow-forward"></i></a></span> <span>Programs <i
								class="ion-ios-arrow-forward"></i></span></p>
					<h1 class="mb-0 bread">Services</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-section">
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
					<p>Learn drug safety, AE reporting, MedDRA coding, signal detection, and global PV regulations in a
						6-month
						live mentorship program.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/course-cr-pv" class="btn-course">View Details</a>
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
					<a href="/course-cr-pv-cdm" class="btn-course">View Details</a>
				</div>
			</div>


			<!-- New Course: Clinical Research, Pharmacovigilance & Data Management -->
			<div class="course-card">
				<div class="card-image" style="background-image: url('images/combined_course.jpg');"></div>
				<div class="card-content">
					<h3>Clinical Research, Pharmacovigilance &amp; Data Management</h3>
					<p>A comprehensive 6-month program covering Clinical Research, Drug Safety and Clinical Data Management.</p>
					<ul>
						<li>📅 Duration: 6 Months</li>
						<li>🌐 100% Live Online</li>
						<li>🎓 Eligibility: BPharm, MSc, MBBS, etc.</li>
						<li>💼 100% Placement Support</li>
					</ul>
					<a href="/clinical-research-cr-pv-dm" class="btn-course">View Details</a>
				</div>
			</div>


			<!-- Course 3 -->
			<div class="course-card">
				<div class="card-image" style="background-image: url('images/regulatory_affairs.jpg');"></div>
				<div class="card-content">
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
					<a href="/course-cr-regulatory" class="btn-course">View Details</a>
				</div>
			</div>


			<!-- Course 4 -->
			<div class="course-card">
				<div class="card-image" style="background-image: url('images/medical_writing.jpg');"></div>
				<div class="card-content">
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
					<a href="/course-cr-medical-writing" class="btn-course">View Details</a>
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
							<p>We help you craft an impressive CV, optimize your LinkedIn profile, and master job
								interviews to land your dream role in clinical research and life sciences.</p>
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
							<p>Our mentors provide in-depth insights into clinical research, pharmacovigilance, and
								clinical data management, ensuring you’re job-ready with relevant knowledge.</p>
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
							<p>We provide opportunities to connect with professionals in the industry, helping you
								expand your network and gain valuable industry contacts.</p>
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
							<p>Our mock interview sessions help you develop confidence, prepare for behavioral
								interviews, and gain insights from hiring managers to stand out in the job market.</p>
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

	<footer class="footer">
		<div class="container-fluid px-lg-5">
			<div class="row">
				<div class="col-md-9 py-5">
					<div class="row">
						<div class="col-md-4 mb-md-0 mb-4">
							<h2 class="footer-heading">About Clinidea</h2>
							<p>Empowering students with industry insights and career-focused mentorship in Clinical
								Research, Pharmacovigilance, and Clinical Data Management.</p>
							<ul class="ftco-footer-social p-0">
								<li class="ftco-animate"><a href="#" title="LinkedIn"><span
											class="fa fa-linkedin"></span></a></li>
								<li class="ftco-animate"><a href="#" title="Email"><span
											class="fa fa-envelope"></span></a></li>
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
								<li><a href="mailto:clinideaeducation@gmail.com"
										class="py-1 d-block">clinideaeducation@gmail.com</a></li>
								<li><a href="tel:9370472071" class="py-1 d-block">9370472071</a></li>

								<li><a href="tel:8999213129" class="py-1 d-block">8999213129</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>



	<!-- loader -->` }} />
  );
};

export default Program;
