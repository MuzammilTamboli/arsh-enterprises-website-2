import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact-us' }
  ];

  const services = [
    'AC Installation',
    'AC Uninstallation',
    'AC Maintenance',
    'VRV/VRF Systems',
    'Annual Contracts',
    'Emergency Repairs',
    'Free Quotes'
  ];

  const serviceAreas = [
    'Downtown District',
    'Business District',
    'Suburban Areas',
    'Residential Complexes',
    'Commercial Buildings',
    'Industrial Facilities'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3">
               <img src={`${import.meta.env.BASE_URL}LOGO.jpg`} alt="Logo" />
              </div>

              <div>
                <div className="text-2xl font-bold text-sky-400">ARSH</div>
                <div className="text-sm text-gray-400 -mt-1">ENTERPRISES</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for reliable AC installation, maintenance, and repair services. 
              Professional, licensed, and insured technicians serving the community for over 15 years.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-sky-400 mr-3" />
                <span className="text-gray-300">8208699669</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-sky-400 mr-3" />
                <span className="text-gray-300">refritechservices.50@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-sky-400 mr-3" />
                <span className="text-gray-300">719 Nana Peth, Pune</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-gray-300">{area}</span>
                </li>
              ))}
            </ul>
            
            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-600 rounded-lg">
              <h5 className="font-semibold text-white mb-2">24/7 Emergency Service</h5>
              <p className="text-red-100 text-sm mb-2">AC breakdown? We're here to help!</p>
              <a
                href="tel:+918208699669"
                className="text-white font-semibold hover:text-red-200 transition-colors duration-300"
              >
                Call: 8208699669
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ARSH ENTERPRISES. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                License Info
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Licensed, Bonded & Insured | EPA Certified Technicians | NATE Excellence Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
