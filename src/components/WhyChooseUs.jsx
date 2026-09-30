import React from 'react';
import { UserCheck, Heart, ShieldCheck, MapPin } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Experienced Professionals',
      description: 'Healthcare delivered by trained and qualified medical professionals.',
      icon: <UserCheck size={28} />
    },
    {
      title: 'Patient-Focused Approach',
      description: 'Every consultation begins with understanding the patient\'s needs.',
      icon: <Heart size={28} />
    },
    {
      title: 'Comfortable Environment',
      description: 'A welcoming environment designed to make healthcare less stressful.',
      icon: <ShieldCheck size={28} />
    },
    {
      title: 'Convenient Access',
      description: 'A locally accessible healthcare destination in Pilani.',
      icon: <MapPin size={28} />
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Values</span>
          <h2>Why Patients Choose SRD</h2>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-icon">
                {reason.icon}
              </div>
              <h3 className="why-choose-title">{reason.title}</h3>
              <p className="why-choose-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
