import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      rating: 5,
      text: 'ARSH ENTERPRISES installed our new central AC system last month. The team was professional, punctual, and the installation was flawless. Our home has never been more comfortable!',
      location: 'Koregaon Park, Pune',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh Patel',
      role: 'Business Owner',
      rating: 5,
      text: 'We\'ve been using ARSH ENTERPRISES for our office building maintenance for 3 years. Their annual service contract saves us money and ensures our systems run efficiently year-round.',
      location: 'Baner, Pune',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sneha Desai',
      role: 'Property Manager',
      rating: 5,
      text: 'When our AC broke down during a heatwave, ARSH ENTERPRISES responded within 2 hours on a weekend. Their emergency service is truly reliable and reasonably priced.',
      location: 'Wakad, Pune',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Kumar',
      role: 'Restaurant Owner',
      rating: 5,
      text: 'The team handled our restaurant\'s HVAC system upgrade professionally. They worked around our business hours and completed everything on schedule. Highly recommended!',
      location: 'FC Road, Pune',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Kavita Singh',
      role: 'Homeowner',
      rating: 5,
      text: 'From quote to installation, everything was transparent and professional. The technicians explained everything clearly and left our home spotless. Great value for money!',
      location: 'Kothrud, Pune',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-sky-200" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sky-100">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sky-600 font-medium">{testimonials[currentIndex].role}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-sky-600' : 'bg-sky-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-sky-600">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;