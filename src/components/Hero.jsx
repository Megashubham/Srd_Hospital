import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">SRD HOSPITAL • PILANI</span>
          <h1 className="hero-title">
            Compassionate Care. <br />
            <span className="text-primary">Better Health.</span>
          </h1>
          <p className="hero-description">
            Professional and patient-focused healthcare in Pilani, delivered with care, expertise, and respect.
          </p>
          
          <div className="hero-actions">
            <a href="#appointment" className="btn btn-primary">Book an Appointment</a>
            <a href={`tel:${hospitalConfig.contact.phone.split(',')[0].trim()}`} className="btn btn-outline">
              <Phone size={18} />
              Call Hospital
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Patient-Centred Care</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Experienced Medical Team</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Modern Clinical Environment</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-wrapper">
            <img 
              src="/assets/Poster.jpeg" 
              alt="SRD Hospital" 
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
