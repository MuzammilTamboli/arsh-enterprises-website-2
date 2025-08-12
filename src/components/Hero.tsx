import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={`${import.meta.env.BASE_URL}1194650.jpg?auto=compress&cs=tinysrgb&w=1200`} 
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Logo Section */}
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3">
                <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Company Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600">ARSH</div>
                <div className="text-lg text-gray-600 -mt-1">ENTERPRISES</div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Advanced AC & VRV/VRF <span className="text-sky-600">Maintenance</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert Technicians. Advanced VRV/VRF Systems. Fast Response. Affordable Pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact-us"
                className="inline-flex items-center px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 text-lg font-semibold"
              >
                Get Free Quote
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a
                href="tel:+918208699669"
                className="inline-flex items-center px-8 py-4 border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors duration-300 text-lg font-semibold"
              >
                Call Emergency: 8446268484
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]">
              <img 
                src={`${import.meta.env.BASE_URL}image.jpg`}  
                alt="AC technician repairing air conditioning unit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Expert AC Repair Services</h3>
                <p className="text-white/90">Professional technicians fixing your AC problems</p>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-sky-600">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600">4.9★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
