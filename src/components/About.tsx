import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Satisfied Customers' },
    { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Emergency Service' },
    { icon: <Shield className="w-8 h-8" />, number: '100%', label: 'Licensed & Insured' },
  ];

  const certifications = [
    'EPA Certified Technicians',
    'NATE Certified Excellence',
    'HVAC Contractor License',
    'Liability Insurance Coverage',
    'Worker\'s Compensation',
    'Better Business Bureau A+'
  ];

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About ARSH ENTERPRISES</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the HVAC industry, ARSH ENTERPRISES has been the trusted choice for 
              residential and commercial air conditioning services. Our team of certified technicians is committed to 
              delivering exceptional service and customer satisfaction. We specialize in advanced VRV/VRF systems for commercial applications.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We pride ourselves on using the latest technology, maintaining transparent pricing, and providing 
              reliable solutions that keep your spaces comfortable year-round. From traditional split ACs to advanced Variable Refrigerant Flow systems, your comfort is our commitment.
            </p>

            {/* Mission Statement */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-100 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                "To provide reliable, efficient, and affordable air conditioning solutions while building lasting 
                relationships with our customers through exceptional service and integrity."
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Licenses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Team Photo */}
            <div className="relative rounded-2xl overflow-hidden mb-8 h-64">
              <img 
                src="wireman-dissasembling-air-conditioner.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="AC technician working on air conditioning unit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium">Professional AC Services</p>
                <p className="text-white/90 text-sm">Expert AC repair and maintenance</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-sky-100 text-sky-600 rounded-lg mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;