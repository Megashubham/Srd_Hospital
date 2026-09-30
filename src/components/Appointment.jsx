import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Basic Indian phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0,0,0,0);
    
    if (formData.date && selectedDate < today) {
      newErrors.date = 'Date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        // Here we would normally POST to /api/appointments
        setStatus('success');
      }, 1500);
    }
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="container appointment-container">
        
        <div className="appointment-content">
          <h2>Your Health Deserves Attention.</h2>
          <p className="appointment-lead">
            Schedule a consultation with the SRD Hospital team.
          </p>
          <div className="appointment-contact-actions">
            <a href={`tel:${hospitalConfig.contact.phone.split(',')[0].trim()}`} className="btn btn-secondary">
              <Phone size={18} /> Call Hospital
            </a>
          </div>
        </div>

        <div className="appointment-form-wrapper card">
          {status === 'success' ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Appointment Request Received</h3>
              <p>Thank you. The SRD Hospital team will contact you to confirm your appointment.</p>
              <button 
                className="btn btn-outline mt-4" 
                onClick={() => { setStatus('idle'); setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' }); }}
              >
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="appointment-form">
              {status === 'error' && (
                <div className="form-global-error">
                  Unable to submit your request. Please try again or contact the hospital directly.
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-input" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service / Department *</label>
                <select 
                  id="service" 
                  name="service" 
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {hospitalConfig.services.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                  <option value="general">General Consultation</option>
                </select>
                {errors.service && <span className="form-error">{errors.service}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    className="form-input"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && <span className="form-error">{errors.date}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="time" className="form-label">Preferred Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    className="form-input"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-input form-textarea"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Appointment'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Appointment;
