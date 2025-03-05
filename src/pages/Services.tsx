import React from 'react';
import { Code, Brain, LineChart, Terminal, ArrowRight, Zap, Database, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
const { t } = useTranslation();

const services = [
{
  icon: Code,
  title: t('service1_title'),
  description: t('service1_description'),
  features: [
    t('service1_feature1'),
    t('service1_feature2'),
    t('service1_feature3'),
    t('service1_feature4')
  ]
},
{
  icon: LineChart,
  title: t('service2_title'),
  description: t('service2_description'),
  features: [
    t('service2_feature1'),
    t('service2_feature2'),
    t('service2_feature3'),
    t('service2_feature4')
  ]
},
{
  icon: Brain,
  title: t('service3_title'),
  description: t('service3_description'),
  features: [
    t('service3_feature1'),
    t('service3_feature2'),
    t('service3_feature3'),
    t('service3_feature4')
  ]
},
{
  icon: Terminal,
  title: t('service4_title'),
  description: t('service4_description'),
  features: [
    t('service4_feature1'),
    t('service4_feature2'),
    t('service4_feature3'),
    t('service4_feature4')
  ]
},
{
  icon: Zap,
  title: t('service5_title'),
  description: t('service5_description'),
  features: [
    t('service5_feature1'),
    t('service5_feature2'),
    t('service5_feature3'),
    t('service5_feature4')
  ]
},
{
  icon: Cloud,
  title: t('service6_title'),
  description: t('service6_description'),
  features: [
    t('service6_feature1'),
    t('service6_feature2'),
    t('service6_feature3'),
    t('service6_feature4')
  ]
}
];

const additionalFeatures = [
{ icon: Zap, title: t('additional_feature1_title'), description: t('additional_feature1_description') },
{ icon: Database, title: t('additional_feature2_title'), description: t('additional_feature2_description') },
{ icon: Cloud, title: t('additional_feature3_title'), description: t('additional_feature3_description') }
];

return (
<div className="bg-white">
  <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          {t('services_title')}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {t('services_subtitle')}
        </p>
      </div>
    </div>
  </div>

  <div className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center">
                <service.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="mt-4 text-gray-500">{service.description}</p>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-1" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">{t('why_choose_us_title')}</h2>
        <p className="mt-4 text-xl text-gray-500">
          {t('why_choose_us_subtitle')}
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {additionalFeatures.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center">
              <feature.icon className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
);
};

export default Services;
