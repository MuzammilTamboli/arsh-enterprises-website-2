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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    <section id="contact-us" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-15 blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-25 blur-xl animate-float"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to schedule a service? Have questions? We're here to help with all your AC needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-300">Main: 8208699669</p>
                  <p className="text-red-400 font-medium">Emergency: 8208699669</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">refritechservices.50@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-400 to-cyan-500 text-white rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300">
                    719 Nana Peth, Aqsa Height Building<br />
                    Near Tarachand Hospital<br />
                    Pune 2
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 text-white rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Emergency calls only<br />
                    <span className="text-red-400 font-medium">24/7 Emergency Service</span>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 shadow-lg">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-400 mr-2" />
                <h4 className="font-semibold text-white">Quick WhatsApp Contact</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Get instant responses to your questions via WhatsApp
              </p>
              <a
                href="https://wa.me/918208699669?text=Hello%20ARSH%20ENTERPRISES%2C%20I%20need%20AC%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-2xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Logo in Contact Form */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 mr-3">
                  <img
                    src={`${import.meta.env.BASE_URL}logo.jpg`}
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ARSH</div>
                  <div className="text-xs text-gray-400 -mt-1">ENTERPRISES</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>

              <div className="space-y-6">
                {/* Full Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="AC Maintenance">AC Maintenance</option>
                      <option value="AC Repair">AC Repair</option>
                      <option value="VRV/VRF Systems">VRV/VRF Systems</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-400"
                    placeholder="Write your message here"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform"
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
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Our Location</h3>
          <div className="relative rounded-lg overflow-hidden h-64 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=719+Nana+Peth,+Aqsa+Height+Building,+Near+Tarachand+Hospital,+Pune+2&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
