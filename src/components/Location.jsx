import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './Location.css';

const Location = () => {
  return (
    <section id="contact" className="location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact & Location</span>
          <h2>Visit SRD Hospital</h2>
        </div>

        <div className="location-grid">
          <div className="location-info">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>
                  SRD Hospital<br />
                  {hospitalConfig.location.address}
                </p>
                <a 
                  href={hospitalConfig.location.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="directions-link"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Contact</h4>
                <p>Phone: {hospitalConfig.contact.phone}</p>
                <p>WhatsApp: {hospitalConfig.contact.whatsapp}</p>
                <p>Email: {hospitalConfig.contact.email}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details">
                <h4>Hours</h4>
                <p>Monday - Friday: {hospitalConfig.timings.monday}</p>
                <p>Saturday: {hospitalConfig.timings.saturday}</p>
                <p>Sunday: {hospitalConfig.timings.sunday}</p>
              </div>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <MapPin size={48} className="map-placeholder-icon" />
              <h3>{hospitalConfig.location.address}</h3>
              <a 
                href={hospitalConfig.location.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
            {/* When actual Google Maps embed iframe is available, it goes here */}
            {/* <iframe src="..." width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
