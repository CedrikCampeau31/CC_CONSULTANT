import React from 'react';

// Importation des images des projets
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
import project6 from './project6.png';
import project7 from './project7.png';

const Services = () => {
  const services = [
    {
      title: 'High-Performance Computing (HPC) Setup',
      category: 'Infrastructure & Optimization',
      description:
        'Implemented a high-performance computing (HPC) environment using PBS/SLURM for large-scale data processing, reducing compute times by 50%.',
      image: project1,
    },
    {
      title: 'Docker Container Deployment',
      category: 'DevOps & Infrastructure',
      description:
        'Designed and deployed Docker containers for seamless application rollout and environment consistency.',
      image: project2,
    },
    {
      title: 'Real Estate Price Forecasting',
      category: 'Machine Learning & AI',
      description:
        'Developed a Python and R-based ML model to predict real estate prices with high accuracy, aiding investment decisions.',
      image: project3,
    },
    {
      title: 'SAP WEBI & Power BI Integration',
      category: 'Business Intelligence & Data Analytics',
      description:
        'Integrated SAP WEBI with Power BI to create a unified reporting solution, enhancing data visibility and insights.',
      image: project4,
    },
    {
      title: 'ETL Pipelines & API Automation',
      category: 'Data Engineering & Automation',
      description:
        'Built automated ETL pipelines and RESTful APIs for real-time data ingestion and analytics, reducing manual workloads.',
      image: project5,
    },
    {
      title: 'Agile & Scrum Project Management',
      category: 'Project Management & Strategy',
      description:
        'Led multiple Scrum teams using Kanban boards and sprints, delivering software on time and within budget.',
      image: project6,
    },
    {
      title: 'Geospatial Analysis & Optimization with ArcGIS',
      category: 'Geospatial Analysis & Optimization',
      description:
        'Leveraged ArcGIS to perform advanced geospatial analysis, optimizing distance calculations and enriching spatial data with layered statistical analyses for enhanced decision-making.',
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
              Our Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Delivering cutting-edge solutions tailored to your business needs.
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

export default Services;
