const fs = require('fs');
let code = fs.readFileSync('src/pages/About.jsx', 'utf8');

const importStr = `import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../public/css/StudentSlider.css';
`;

const componentStart = `const About = () => {
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
      <div dangerouslySetInnerHTML={{ __html: \`<div class="wrap">\``;

const splitStr1 = `<section class="ftco-section testimony-section bg-secondary">`;
const splitStr2 = `<footer class="footer">`;

// Guard that it hasn't already been split using Swiper
if (code.includes('import { Swiper')) {
  console.log('Already updated!');
  process.exit(0);
}

const parts1 = code.split(splitStr1);
const beforeTestimony = parts1[0].split(`<div class="wrap">`)[1]; 
const parts2 = parts1[1].split(splitStr2);
const footerHtml = splitStr2 + parts2[1].split('` }} />')[0];

const jsxMiddle = `\` }} />

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
                    <img src={img} alt={\`student-\${index}\`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      <div dangerouslySetInnerHTML={{ __html: \``;

const newCode = importStr + '\n' + componentStart + beforeTestimony + jsxMiddle + footerHtml + `\` }} />
    </div>
  );
};

export default About;
`;

fs.writeFileSync('src/pages/About.jsx', newCode);
console.log('About.jsx updated successfully.');
