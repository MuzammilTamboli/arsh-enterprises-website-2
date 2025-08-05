import React from 'react';
import { Check, Star, Phone } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Basic',
      price: '₹750',
      period: 'per visit',
      description: 'Essential maintenance for your AC unit',
      features: [
        'Filter cleaning/replacement',
        'Basic system inspection',
        'Thermostat check',
        'Performance assessment',
        'Service report',
        '30-day service guarantee'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Standard',
      price: '₹7500',
      period: 'per year',
      description: 'Comprehensive annual maintenance plan',
      features: [
        'Everything in Basic',
        '2 maintenance visits per year',
        'Coil cleaning & inspection',
        'Refrigerant level check',
        'Electrical connections check',
        '15% discount on repairs',
        'Priority scheduling',
        '1-year service guarantee'
      ],
      popular: true,
      color: 'border-sky-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the service package that best fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${pkg.color} ${
                pkg.popular ? 'transform lg:scale-105 bg-sky-50' : ''
              } hover:shadow-xl transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star size={16} className="mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-sky-600">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-colors duration-300 ${
                  pkg.popular
                    ? 'bg-sky-600 text-white hover:bg-sky-700'
                    : 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50'
                }`}
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 text-center border border-sky-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Quote?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For commercial properties, multiple units, or specialized requirements, 
            our team will create a customized service plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-us"
              className="inline-flex items-center px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 font-semibold"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+918208699669"
              className="inline-flex items-center px-8 py-4 border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors duration-300 font-semibold"
            >
              <Phone size={20} className="mr-2" />
              Call for Consultation
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We proudly serve residential and commercial customers across the metropolitan area including 
            Downtown, Business District, Suburban Communities, and surrounding neighborhoods. 
            Contact us to confirm service availability in your area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;