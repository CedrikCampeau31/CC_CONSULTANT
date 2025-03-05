import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Professional Consulting</h3>
            <p className="mt-2 text-gray-400">
              Empowering businesses through technology and data-driven solutions
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Professional Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
