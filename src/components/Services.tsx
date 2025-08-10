import React from 'react';
import { Wrench, Trash2, Shield, FileText, AlertCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'AC Installation',
      description: 'Professional installation of split, window, and central AC units with proper sizing and placement for maximum efficiency.',
      features: ['Expert sizing consultation', 'Professional mounting', 'Electrical connections', 'Performance testing'],
      image: 'https://images.pexels.com/photos/3964236/pexels-photo-3964236.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: 'AC Uninstallation',
      description: 'Safe and careful removal of existing AC units with proper disposal of refrigerants and components.',
      features: ['Safe refrigerant removal', 'Careful unit dismounting', 'Eco-friendly disposal', 'Site cleanup'],
      image: 'https://images.pexels.com/photos/3949724/pexels-photo-3949724.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AC Maintenance',
      description: 'Comprehensive maintenance services to keep your AC running efficiently and extend its lifespan.',
      features: ['Filter cleaning/replacement', 'Coil cleaning', 'Refrigerant check', 'Performance optimization'],
      image: 'https://images.pexels.com/photos/3964230/pexels-photo-3964230.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'VRV/VRF Systems',
      description: 'Advanced Variable Refrigerant Volume/Flow systems for commercial buildings offering superior energy efficiency and zone control.',
      features: ['Multi-zone climate control', 'Energy-efficient operation', 'Simultaneous heating & cooling', 'Smart building integration'],
      image: 'https://images.pexels.com/photos/7688107/pexels-photo-7688107.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Annual Service Contracts',
      description: 'Comprehensive yearly maintenance plans with priority service and discounted repairs.',
      features: ['Regular maintenance visits', 'Priority emergency service', '20% discount on repairs', 'Performance reports'],
      image: 'https://images.pexels.com/photos/7979432/pexels-photo-7979432.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Emergency Repairs',
      description: '24/7 emergency repair services for when your AC breaks down unexpectedly.',
      features: ['24/7 availability', 'Rapid response time', 'Diagnostic expertise', 'Quality parts guarantee'],
      image: 'https://images.pexels.com/photos/3949728/pexels-photo-3949728.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AC solutions for residential and commercial properties with guaranteed quality and satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-sky-200 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} service`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-lg mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-300">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call-to-Action */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center border border-red-200">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Emergency AC Repair?</h3>
          <p className="text-gray-600 mb-6">Don't sweat it! Our emergency technicians are available 24/7.</p>
          <a
            href="tel:+918446268484"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg font-semibold"
          >
            Call Emergency Line: 8446268484
          </a>
        </div>

        {/* VRV/VRF Systems Highlight */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced VRV/VRF Systems</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of commercial air conditioning with our Variable Refrigerant Volume/Flow systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Energy Efficient</h4>
              <p className="text-gray-600 text-sm">Up to 30% more efficient than traditional systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Zone Control</h4>
              <p className="text-gray-600 text-sm">Individual temperature control for each zone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Integration</h4>
              <p className="text-gray-600 text-sm">Compatible with building management systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Simultaneous H&C</h4>
              <p className="text-gray-600 text-sm">Heat and cool different zones simultaneously</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="#contact-us"
              className="inline-flex items-center px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 text-lg font-semibold"
            >
              Get VRV/VRF Quote
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
