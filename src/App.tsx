import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PartnerBrands from './components/PartnerBrands';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PartnerBrands />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;