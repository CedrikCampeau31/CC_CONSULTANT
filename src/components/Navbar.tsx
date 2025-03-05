import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import im33 from './im33.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: t('about_us'), href: '/about' },
    { name: t('projects'), href: '/projects' },
    { name: t('services'), href: '/services' },
    { name: t('contact_us'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-16 w-auto" src={im33} alt="Logo" />
              <span className="font-bold text-xl text-gray-900 ml-2">CC Consultant</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive(item.href)
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton de changement de langue */}
          <div className="ml-4">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300 transition"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;