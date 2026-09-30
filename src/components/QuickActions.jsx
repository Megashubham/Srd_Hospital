import React from 'react';
import { Calendar, Stethoscope, MapPin, MessageCircle } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    {
      title: 'Book Appointment',
      description: 'Schedule your consultation.',
      icon: <Calendar size={24} />,
      link: '#appointment'
    },
    {
      title: 'Our Services',
      description: 'Explore available healthcare services.',
      icon: <Stethoscope size={24} />,
      link: '#services'
    },
    {
      title: 'Find Us',
      description: 'Get directions to SRD Hospital.',
      icon: <MapPin size={24} />,
      link: hospitalConfig.location.googleMapsUrl,
      external: true
    },
    {
      title: 'Contact Us',
      description: 'Speak with the hospital team.',
      icon: <MessageCircle size={24} />,
      link: '#contact'
    }
  ];

  return (
    <section id="quick-actions" className="quick-actions-section">
      <div className="container">
        <div className="quick-actions-grid">
          {actions.map((action, index) => (
            <a 
              key={index} 
              href={action.link} 
              className="quick-action-card card"
              target={action.external ? "_blank" : "_self"}
              rel={action.external ? "noopener noreferrer" : ""}
            >
              <div className="quick-action-icon card-icon">
                {action.icon}
              </div>
              <h3 className="quick-action-title">{action.title}</h3>
              <p className="quick-action-desc">{action.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
