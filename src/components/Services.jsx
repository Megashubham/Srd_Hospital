import React from 'react';
import { ArrowRight, Brain, Smile, Check } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './Services.css';

const IconMap = {
  brain: <Brain size={24} />,
  smile: <Smile size={24} />
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Services</span>
          <h2>Healthcare Specialties</h2>
          <p>Explore the specialized healthcare services provided at SRD Hospital, delivered by experienced professionals.</p>
        </div>

        <div className="services-grid">
          {hospitalConfig.services.map((service) => (
            <div key={service.id} className="service-card card">
              <div className="service-icon card-icon">
                {IconMap[service.icon] || <Brain size={24} />}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              {service.facilities && service.facilities.length > 0 && (
                <ul className="service-facilities-list">
                  {service.facilities.map((facility, idx) => (
                    <li key={idx} className="service-facility-item">
                      <Check size={16} className="facility-check" />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="service-footer">
                <a href="#contact" className="service-link">
                  Explore Service <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
