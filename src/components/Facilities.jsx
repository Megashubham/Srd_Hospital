import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Facilities.css';

const images = [
  { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2000&auto=format&fit=crop", alt: "Hospital Exterior" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop", alt: "Reception Area" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop", alt: "Consultation Room" },
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop", alt: "Treatment Facilities" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop", alt: "Waiting Lounge" }
];

const Facilities = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Environment</span>
          <h2>Inside SRD Hospital</h2>
          <p>Take a look at our modern, clean, and patient-focused facilities.</p>
        </div>

        <div className="facilities-gallery">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`gallery-item item-${index}`}
              onClick={() => openLightbox(index)}
            >
              <img src={img.src} alt={img.alt} className="gallery-image" loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={32} />
          </button>
          
          <button className="lightbox-nav nav-prev" onClick={prevImage} aria-label="Previous">
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className="lightbox-image" 
            onClick={(e) => e.stopPropagation()} 
          />
          
          <button className="lightbox-nav nav-next" onClick={nextImage} aria-label="Next">
            <ChevronRight size={48} />
          </button>
          
          <div className="lightbox-caption">
            {images[currentIndex].alt}
          </div>
        </div>
      )}
    </section>
  );
};

export default Facilities;
