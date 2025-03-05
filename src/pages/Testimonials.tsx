import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      content: 'The machine learning solution implemented has transformed our business operations. The results exceeded our expectations, and the ongoing support has been exceptional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Director of Analytics, DataFlow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      content: 'The custom BI dashboard developed for our company has significantly improved our decision-making process. The attention to detail and technical expertise were impressive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, InnovateTech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      content: 'Working together on our software development project was a great experience. The solutions provided were innovative and perfectly aligned with our business needs.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO, StartupX',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      content: 'The data analysis project delivered exceptional insights that helped us optimize our operations. The professional approach and clear communication made the process smooth.',
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Client Testimonials
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Hear what clients say about working together
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-100">
                  Let's discuss how we can work together to achieve your goals.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;