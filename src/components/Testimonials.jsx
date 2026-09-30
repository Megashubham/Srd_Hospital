import React from 'react';
import { Star } from 'lucide-react';
import { hospitalConfig } from '../data/hospitalConfig';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Patient Stories</span>
          <h2>What Our Patients Say</h2>
        </div>

        <div className="testimonials-grid">
          {hospitalConfig.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
          
          {/* Mock testimonial to show grid layout while awaiting approved content */}
          {hospitalConfig.testimonials.length === 1 && (
            <div className="testimonial-card card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <blockquote className="testimonial-text">
                "The doctors and staff were incredibly professional and supportive throughout the treatment."
              </blockquote>
              <p className="testimonial-author">— A. Kumar</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
