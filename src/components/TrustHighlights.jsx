import React from 'react';
import { ShieldCheck, HeartPulse, Stethoscope, MapPin } from 'lucide-react';
import './TrustHighlights.css';

const TrustHighlights = () => {
  const highlights = [
    {
      title: 'Experienced Team',
      description: 'Professional healthcare delivered by trained medical professionals.',
      icon: <Stethoscope size={20} />
    },
    {
      title: 'Patient-Centred Care',
      description: 'Focused on listening, understanding and supporting every patient.',
      icon: <HeartPulse size={20} />
    },
    {
      title: 'Comfortable Environment',
      description: 'A clean and welcoming clinical experience.',
      icon: <ShieldCheck size={20} />
    },
    {
      title: 'Convenient Location',
      description: 'Healthcare services available in Pilani.',
      icon: <MapPin size={20} />
    }
  ];

  return (
    <section className="trust-highlights-section">
      <div className="container">
        <div className="trust-highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="trust-highlight-card">
              <div className="trust-highlight-icon">
                {item.icon}
              </div>
              <div>
                <h4 className="trust-highlight-title">{item.title}</h4>
                <p className="trust-highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
