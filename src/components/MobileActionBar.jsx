import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './MobileActionBar.css';

const MobileActionBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show action bar after scrolling past the hero section
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mobile-action-bar ${isVisible ? 'visible' : ''}`}>
      <div className="action-bar-container">
        <a href={`tel:${hospitalConfig.contact.phone.split(',')[0].trim()}`} className="action-btn">
          <Phone size={20} />
          <span>Call</span>
        </a>
        <a 
          href={`https://wa.me/${hospitalConfig.contact.whatsapp}?text=Hello SRD Hospital, I would like to enquire about an appointment.`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="action-btn"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <a href="#appointment" className="action-btn primary-action">
          <Calendar size={20} />
          <span>Appointment</span>
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
