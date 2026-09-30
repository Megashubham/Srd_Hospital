import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import TrustHighlights from './components/TrustHighlights';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import PatientJourney from './components/PatientJourney';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickActions />
        <TrustHighlights />
        <About />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <PatientJourney />
        <Facilities />
        <Testimonials />
        <Appointment />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;
