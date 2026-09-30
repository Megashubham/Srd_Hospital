import React from 'react';
import './PatientJourney.css';

const PatientJourney = () => {
  const steps = [
    {
      num: '01',
      title: 'Book',
      desc: 'Schedule an appointment through the website, phone or WhatsApp.'
    },
    {
      num: '02',
      title: 'Visit',
      desc: 'Visit SRD Hospital at the scheduled time.'
    },
    {
      num: '03',
      title: 'Consult',
      desc: 'Meet the appropriate medical professional.'
    },
    {
      num: '04',
      title: 'Continue Care',
      desc: 'Follow the treatment or follow-up plan provided by your healthcare professional.'
    }
  ];

  return (
    <section className="journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Patient Experience</span>
          <h2>Your Journey With SRD</h2>
        </div>

        <div className="journey-steps">
          {steps.map((step, index) => (
            <div key={index} className="journey-step">
              <div className="step-circle">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
