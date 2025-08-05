import React from 'react';

const PartnerBrands = () => {
  const brands = [
    {
      name: 'LG',
      logo: '13 famous logos with hidden messages.jpg',
      alt: 'LG Air Conditioning Systems'
    },
    {
      name: 'Mitsubishi',
      logo: 'download.jpg',
      alt: 'Mitsubishi Electric HVAC'
    },
    {
      name: 'Daikin',
      logo: 'Daikin Logo PNG Vector (AI) Free Download.jpg',
      alt: 'Daikin Air Conditioning'
    },
    {
      name: 'Blue Star',
      logo: 'BLUE STAR.jpg',
      alt: 'Blue Star AC Systems'
    },
    {
      name: 'Lloyd',
      logo: 'Car Logos List  Lloyd Logo Meaning And History Latest - Lloyd Ac Logo Vector PNG Transparent With Clear Background ID 167961 _ TopPNG.jpg',
      alt: 'Lloyd Air Conditioners'
    },
    {
      name: 'Voltas',
      logo: 'Voltas vector logo (_EPS +  (1).SVG) download for free.jpeg',
      alt: 'Voltas AC Units'
    },
    {
      name: 'Panasonic',
      logo: 'Panasonic logo vector in _EPS, .AI, .SVG free download.jpeg',
      alt: 'Panasonic HVAC Systems'
    },
    {
      name: 'Samsung',
      logo: 'Samsung Logo PNG Images (Transparent HD Photo Clipart).jpg',
      alt: 'Samsung Air Conditioning'
    },
    {
      name: 'Hitachi',
      logo: 'Hitachi Logo editorial stock photo_ Illustration of available - 129286923.jpg',
      alt: 'Hitachi AC Systems'
    },
    {
      name: 'Carrier',
      logo: 'Engineering Residency for Future Innovators.jpg',
      alt: 'Carrier HVAC Solutions'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Top Partner Brands</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We work with the world's leading AC manufacturers to provide you with the best quality systems and service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 group min-h-[120px]"
            >
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-2xl font-bold text-gray-700 group-hover:text-sky-600 transition-colors duration-300';
                  fallback.textContent = brand.name;
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </div>
          ))}
        </div>

        {/* Brand Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authorized Service</h3>
            <p className="text-gray-300">Official service partner for all major AC brands with genuine parts guarantee</p>
          </div>
          
          <div className="text-white">
            <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
            <p className="text-gray-300">Certified technicians trained on all major brands and latest technologies</p>
          </div>
          
          <div className="text-white">
            <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Warranty Support</h3>
            <p className="text-gray-300">Full warranty support and extended service plans for all partner brands</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Don't see your AC brand? We service all major manufacturers!
          </p>
          <a
            href="#contact-us"
            className="inline-flex items-center px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 font-semibold"
          >
            Check Brand Compatibility
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;