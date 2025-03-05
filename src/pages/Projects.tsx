import React from 'react';
import { useTranslation } from 'react-i18next';

// Importation des images des projets
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
import project6 from './project6.png';
import project7 from './project7.png';

const Projects = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('project1_title'),
      category: t('project1_category'),
      description: t('project1_description'),
      image: project1,
    },
    {
      title: t('project2_title'),
      category: t('project2_category'),
      description: t('project2_description'),
      image: project2,
    },
    {
      title: t('project3_title'),
      category: t('project3_category'),
      description: t('project3_description'),
      image: project3,
    },
    {
      title: t('project4_title'),
      category: t('project4_category'),
      description: t('project4_description'),
      image: project4,
    },
    {
      title: t('project5_title'),
      category: t('project5_category'),
      description: t('project5_description'),
      image: project5,
    },
    {
      title: t('project6_title'),
      category: t('project6_category'),
      description: t('project6_description'),
      image: project6,
    },
    {
      title: t('project7_title'),
      category: t('project7_category'),
      description: t('project7_description'),
      image: project7,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              {t('our_services')}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('our_services_subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {service.category}
                  </p>
                  <div className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
