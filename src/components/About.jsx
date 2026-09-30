import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <img 
              src="/assets/images.jpeg" 
              alt="Inside SRD Hospital" 
              className="about-image"
            />
          </div>
          <div className="about-content">
            <span className="section-eyebrow">About Us</span>
            <h2>About SRD Hospital</h2>
            <p className="about-lead">
              SRD Hospital is committed to providing professional, accessible and patient-focused healthcare in Pilani. 
            </p>
            <p>
              Our approach combines clinical expertise with compassionate care, creating a healthcare experience where patients and their families feel heard, respected and supported. We strive to maintain a clean, welcoming environment equipped with modern facilities.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <span className="feature-dot"></span>
                <span>Patient First</span>
              </div>
              <div className="about-feature">
                <span className="feature-dot"></span>
                <span>Professional Care</span>
              </div>
              <div className="about-feature">
                <span className="feature-dot"></span>
                <span>Modern Environment</span>
              </div>
              <div className="about-feature">
                <span className="feature-dot"></span>
                <span>Accessible Healthcare</span>
              </div>
            </div>

            <a href="#services" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
