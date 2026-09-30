import React from 'react';
import { ArrowRight } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './Doctors.css';

const Doctors = () => {
  return (
    <section id="doctors" className="doctors-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Medical Team</span>
          <h2>Meet Our Doctors</h2>
          <p>Get to know the professionals who provide care at SRD Hospital.</p>
        </div>

        <div className="doctors-grid">
          {hospitalConfig.doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card card">
              <div className="doctor-image-wrapper">
                {doctor.image ? (
                  <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                ) : (
                  <div className="doctor-image-placeholder">
                    <span>{doctor.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialization">{doctor.specialization}</p>
                <div className="doctor-credentials">
                  <p>{doctor.qualification}</p>
                  <p>{doctor.experience} Experience</p>
                </div>
                <div className="doctor-actions">
                  <a href="#appointment" className="btn btn-outline doctor-btn">Book Appointment</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
