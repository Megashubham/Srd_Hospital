import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { hospitalConfig } from '../data/hospitalConfig';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-text">SRD</span>
              <span className="logo-subtext">HOSPITAL</span>
            </a>
            <p className="footer-description">
              {hospitalConfig.tagline}
            </p>
            <p className="footer-description mt-2">
              Compassionate healthcare for patients and families.
            </p>
            <div className="footer-socials mt-4" style={{ display: 'flex', gap: '16px' }}>
              {hospitalConfig.social.instagram && (
                <a href={hospitalConfig.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <FaInstagram size={20} />
                </a>
              )}
              {hospitalConfig.social.facebook && (
                <a href={hospitalConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <FaFacebook size={20} />
                </a>
              )}
              {hospitalConfig.social.youtube && (
                <a href={hospitalConfig.social.youtube} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <FaYoutube size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              {hospitalConfig.services.map(service => (
                <li key={service.id}><a href="#services">{service.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p>Phone: {hospitalConfig.contact.phone}</p>
            <p>WhatsApp: {hospitalConfig.contact.whatsapp}</p>
            <p>Email: {hospitalConfig.contact.email}</p>
            <p className="mt-2">{hospitalConfig.location.address}</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {hospitalConfig.name}. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
