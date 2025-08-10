import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Home, Wrench, Info, DollarSign, Users, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={16} />, link: '#home' },
    { name: 'Services', icon: <Wrench size={16} />, link: '#services' },
    { name: 'About Us', icon: <Info size={16} />, link: '#about-us' },
    { name: 'Pricing', icon: <DollarSign size={16} />, link: '#pricing' },
    { name: 'Testimonials', icon: <Users size={16} />, link: '#testimonials' },
    { name: 'Contact Us', icon: <Mail size={16} />, link: '#contact-us' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3">
                <img
                  src="https://muzammiltamboli.github.io/arsh-enterprises-website-2/logo.jpg"
                  alt="Company Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-sky-600">ARSH</div>
                <div className="text-xs text-gray-600 -mt-1">ENTERPRISES</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="flex items-center text-gray-700 hover:text-sky-600 transition-colors duration-300 font-medium"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918208699669"
              className="flex items-center px-4 py-2 text-sky-600 border border-sky-600 rounded-lg hover:bg-sky-50 transition-colors duration-300"
            >
              <Phone size={16} className="mr-2" />
              Call: 8208699669
            </a>
            <a
              href="#contact-us"
              className="flex items-center px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300"
            >
              <Calendar size={16} className="mr-2" />
              Book Service
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="tel:+918208699669"
                  className="flex items-center justify-center px-4 py-2 text-sky-600 border border-sky-600 rounded-lg hover:bg-sky-50 transition-colors duration-300"
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </a>
                <a
                  href="#contact-us"
                  className="flex items-center justify-center px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300"
                >
                  <Calendar size={16} className="mr-2" />
                  Book Service
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
