import React from 'react';
import { ArrowRight, Code, Brain, LineChart, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import vid1 from './vid1.mp4';
import vid2 from './vid2.mp4';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 bg-black bg-opacity-50 h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
            <span className="block">{t('home_title')}</span>
            <span className="block text-indigo-200">{t('home_subtitle')}</span>
          </h1>
          <p className="mt-4 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:text-xl md:max-w-3xl text-center">
            {t('home_description')}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
            >
              {t('get_started')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400 opacity-50"></div>
      </div>

      {/* Services Overview */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('optimize_solutions')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('optimize_solutions_description')}
          </p>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Code className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {t('development_optimization')}
              </h3>
              <p className="mt-2 text-gray-500">
                {t('development_optimization_description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <LineChart className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {t('data_analysis')}
              </h3>
              <p className="mt-2 text-gray-500">
                {t('data_analysis_description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Terminal className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {t('business_intelligence')}
              </h3>
              <p className="mt-2 text-gray-500">
                {t('business_intelligence_description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Brain className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {t('machine_learning')}
              </h3>
              <p className="mt-2 text-gray-500">
                {t('machine_learning_description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project with Video Background */}
      <div className="relative h-[500px]">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={vid2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {t('featured_project')}
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-200">
                {t('featured_project_description')}
              </p>
              <div className="mt-8 sm:flex">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  {t('our_projects')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
