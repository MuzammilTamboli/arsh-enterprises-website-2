import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <section id="contact-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to schedule a service? Have questions? We're here to help with all your AC needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100 text-sky-600 rounded-lg mr-4 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">Main: 8208699669</p>
                  <p className="text-red-600 font-medium">Emergency: 8208699669</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100 text-sky-600 rounded-lg mr-4 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">refritechservices.50@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100 text-sky-600 rounded-lg mr-4 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    719 Nana Peth, Aqsa Height Building<br />
                    Near Tarachand Hospital<br />
                    Pune 2
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100 text-sky-600 rounded-lg mr-4 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Emergency calls only<br />
                    <span className="text-red-600 font-medium">24/7 Emergency Service</span>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Quick WhatsApp Contact</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Get instant responses to your questions via WhatsApp
              </p>
              <a
                href="https://wa.me/918208699669?text=Hello%20ARSH%20ENTERPRISES%2C%20I%20need%20AC%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              {/* Logo in Contact Form */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 mr-3">
                  <img src="/logo.jpg" alt="Company Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-xl font-bold text-sky-600">ARSH</div>
                  <div className="text-xs text-gray-600 -mt-1">ENTERPRISES</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="installation">AC Installation</option>
                      <option value="uninstallation">AC Uninstallation</option>
                      <option value="maintenance">AC Maintenance</option>
                      <option value="vrv-vrf">VRV/VRF Systems</option>
                      <option value="contract">Annual Service Contract</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="quote">Free Quote</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your AC needs, preferred appointment time, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 font-semibold"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Location</h3>
          <div className="relative rounded-lg overflow-hidden h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=719+Nana+Peth,+Aqsa+Height+Building,+Near+Tarachand+Hospital,+Pune+2&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
