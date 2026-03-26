const fs = require('fs');

try {
  let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

  // Extract the original HTML string 
  let htmlMatch = content.match(/__html: "((?:[^"\\]|\\.)*)"/);
  if (!htmlMatch) {
    console.log("Could not find the __html string");
    process.exit(1);
  }

  let rawHtml = htmlMatch[1].replace(/\\"/g, '"').replace(/\\n/g, '\n');

  // Find the three sections to replace
  // 1: Admission section
  rawHtml = rawHtml.replace(
    /<!-- New Batch Banner -->[\s\S]*?<!-- Upcoming Event \/ Webinar Ad Section -->/,
    `<!-- Admission open section dynamic -->`
  );

  // 2: Event banner
  rawHtml = rawHtml.replace(
    /<!-- Upcoming Event \/ Webinar Ad Section -->[\s\S]*?<section id="courseSection" class="ftco-section">/,
    `<!-- Upcoming Event / Webinar dynamic --><section id="courseSection" class="ftco-section">`
  );

  // 3: Students images replacement
  rawHtml = rawHtml.replace(
    /<div class="carousel-testimony owl-carousel ftco-owl">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
    `<div className="carousel-testimony owl-carousel ftco-owl students-carousel-container"></div></div></div></div></section>`
  );

  // Split rawHtml by the dynamic parts we just injected to construct full JSX components
  const parts = rawHtml.split(/<!-- Admission open section dynamic -->|<!-- Upcoming Event \/ Webinar dynamic -->/);
  const beforeAdmission = parts[0];
  const afterAdmission = parts[1] ? parts[1].split('<section id="courseSection" class="ftco-section">')[0] : '';
  const afterEvent = parts[1] && parts[1].includes('<section id="courseSection" class="ftco-section">') ? '<section id="courseSection" className="ftco-section">' + parts[1].split('<section id="courseSection" class="ftco-section">')[1] : parts[2];

  const beforeAdmissionString = beforeAdmission.replace(/\`/g, "\\`").replace(/\\$/g, "\\$").replace(/\{/g, "\\{");
  const afterEventString = afterEvent.replace(/\`/g, "\\`").replace(/\\$/g, "\\$").replace(/\{/g, "\\{");

  const finalComponent = `import React, { useState, useEffect, useRef } from 'react';

const Home = () => {

  const initialAdmissionData = {
    subheading: "Next Batch Announcement",
    title: "Admissions Open for New Batch!",
    description: "Enroll in our upcoming Mentorship Program to start your journey in Clinical Research and Life Sciences. Fast-track your career with industry-expert guidance. Secure your spot today!",
    batchDate: "15th April 2026",
    time: "10:00 AM Onwards",
    formLink: "https://docs.google.com/forms/",
    badgeText: "Limited Seats!",
    imageUrl: "images/combined_course.jpg"
  };

  const initialEventData = {
    badgeText: "Upcoming Webinar",
    eventName: "Exclusive Webinar on Career in Clinical Research",
    description: "Discover massive career opportunities and industry secrets directly from top experts. Don't miss out on this game-changing session to accelerate your growth!",
    date: "20th May 2026",
    time: "04:00 PM IST",
    link: "#",
    imageUrl: "images/bg_2.jpg"
  };

  const initialStudentImages = [
    "person/img1.jpg",
    "person/img2.jpg",
    "person/img3.jpg",
    "person/img4.jpg",
    "person/img5.jpg",
    "person/img6.jpg",
    "person/img7.jpg"
  ];

  const [admissionData, setAdmissionData] = useState(initialAdmissionData);
  const [eventData, setEventData] = useState(initialEventData);
  const [studentImages, setStudentImages] = useState(initialStudentImages);

  useEffect(() => {
    fetch('https://pharmatalenthub.in/api/admissionopen')
      .then(res => res.json())
      .then(data => {
        if(data && Object.keys(data).length > 0) {
           setAdmissionData({...initialAdmissionData, ...data});
        }
      })
      .catch(err => console.warn("Using dummy data for admission. API Error:", err.message));

    fetch('https://pharmatalenthub.in/api/eventbanner')
      .then(res => res.json())
      .then(data => {
        if(data && Object.keys(data).length > 0) {
           setEventData({...initialEventData, ...data});
        }
      })
      .catch(err => console.warn("Using dummy data for event banner. API Error:", err.message));

    fetch('https://pharmatalenthub.in/api/studentsimg')
      .then(res => res.json())
      .then(data => {
        if(data && Array.isArray(data) && data.length > 0) {
           setStudentImages(data);
        }
      })
      .catch(err => console.warn("Using dummy data for student images. API Error:", err.message));
  }, []);

  useEffect(() => {
    const initCarousel = () => {
      if (window.jQuery && window.jQuery('.carousel-testimony').length) {
         window.jQuery('.carousel-testimony').trigger('destroy.owl.carousel');
         
         const htmlStr = studentImages.map(imgUrl => \`
            <div class="item">
              <img src="\${imgUrl}" alt="Student Testimony" class="testimonial-img" />
            </div>\`).join('');
            
         const containers = document.querySelectorAll('.students-carousel-container');
         containers.forEach(container => { container.innerHTML = htmlStr; });

         window.initializeTheme && window.initializeTheme(window.jQuery);
      }
    };
    setTimeout(initCarousel, 500); 
  }, [studentImages]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: \`__BEFORE_ADMISSION__\` }} />

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
                  <img src={admissionData.imageUrl || 'images/combined_course.jpg'} alt="New Batch Info" className="img-fluid w-100 banner-img" style={{ objectFit: 'cover', height: '380px', transition: 'transform 0.5s ease' }} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'} />
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
                    
                    <a href={eventData.link || eventData.formLink || '#'} className="btn btn-primary py-3 px-5" style={{ background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)', border: 'none', fontWeight: 700, borderRadius: '50px', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(75, 108, 183, 0.3)', transition: 'all 0.3s ease' }} onMouseOver={(e)=>e.currentTarget.style.transform='translateY(-3px)'} onMouseOut={(e)=>e.currentTarget.style.transform='translateY(0)'}>Register Now <span className="fa fa-arrow-right ml-2"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div dangerouslySetInnerHTML={{ __html: \`__AFTER_EVENT__\` }} />
    </div>
  );
};

export default Home;
`

  // Instead of using replace() directly which might run into special characters, use split and join
  const fullContent = finalComponent.split('__BEFORE_ADMISSION__').join(beforeAdmissionString).split('__AFTER_EVENT__').join(afterEventString);

  fs.writeFileSync('src/pages/Home.jsx', fullContent);
  console.log('Successfully completed the component injection!');

} catch (err) {
  console.error("Migration script failed:", err);
}
