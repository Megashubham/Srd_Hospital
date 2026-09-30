#!/bin/bash
mkdir -p src/components
COMPONENTS=(
  "Navbar"
  "Hero"
  "QuickActions"
  "TrustHighlights"
  "AboutSection"
  "ServicesSection"
  "WhyChooseUs"
  "DoctorsSection"
  "PatientJourney"
  "FacilitiesGallery"
  "Testimonials"
  "AppointmentSection"
  "LocationSection"
  "Footer"
  "MobileActionBar"
)

for COMP in "${COMPONENTS[@]}"; do
  cat << FILE > src/components/${COMP}.jsx
import React from 'react';

const ${COMP} = () => {
  return (
    <section id="${COMP.toLowerCase()}">
      <div className="container">
        <h2>${COMP}</h2>
      </div>
    </section>
  );
};

export default ${COMP};
FILE
done
