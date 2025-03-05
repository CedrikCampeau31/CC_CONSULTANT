import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Brain, LineChart, Terminal } from 'lucide-react';

// Images existantes

import powerbi from './powerbi.png';
import sapbw from './sapbw.png';
import sasviya from './sasviya.png';
import zapier from './zapier.png';
import powerautomate from './powerautomate.png';
import powerapp from './powerapp.png';
import vsc from './vsc.png';
import pycharm from './pycharm.png';
import jupyter from './jupyter.png';
import rstudio from './rstudio.png';
import python from './python.png';
import sql from './sql.png';
import powershell from './powershell.png';
import javascript from './javascript.png';
import java from './java.png';
import html from './html.png';
import xml from './xml.png';
import excel from './excel.png';
import access from './access.png';
import ibmDataStudio from './ibmDataStudio.png';
import unity from './unity.png';
import fire from './fire.png';
import aws from './aws.png';
import azure from './azure.png';

// Nouvelles images
import sapwebi from './sapwebi.png';
import csharp from './csharp.png';
import docker from './docker.png';
import hpc from './hpc.png';
import scrum from './scrum.png';
import kanban from './kanban.png';
import confluence from './confluence.png';
import mbed from './mbed.png';

// Ajout du logo ArcGIS
import arcgis from './arcgis.png';

const About = () => {
  const { t } = useTranslation();

  // Section Data & BI Tools (ajout d'ArcGIS)
  const dataAndBI = [
    { src: powerbi, alt: 'Power BI' },
    { src: sapbw, alt: 'SAP BW' },
    { src: sasviya, alt: 'SAS Viya' },
    { src: sapwebi, alt: 'SAP WEBI' },
    { src: excel, alt: 'Excel' },
    { src: access, alt: 'Access' },
    { src: ibmDataStudio, alt: 'IBM Data Studio' },
    { src: arcgis, alt: 'ArcGIS' }
  ];

  // Section Process Automation
  const automation = [
    { src: zapier, alt: 'Zapier' },
    { src: powerautomate, alt: 'Power Automate' },
  ];

  // Section Development & Coding
  const development = [
    { src: vsc, alt: 'Visual Studio Code' },
    { src: pycharm, alt: 'PyCharm' },
    { src: jupyter, alt: 'Jupyter Notebook' },
    { src: rstudio, alt: 'RStudio' },
    { src: python, alt: 'Python & R' },
    { src: sql, alt: 'SQL' },
    { src: powershell, alt: 'PowerShell' },
    { src: javascript, alt: 'JavaScript' },
    { src: java, alt: 'Java' },
    { src: html, alt: 'HTML' },
    { src: xml, alt: 'XML' },
    { src: powerapp, alt: 'Power App' },
    { src: unity, alt: 'Unity' },
    { src: csharp, alt: 'C#' },
    { src: docker, alt: 'Docker' },
    { src: hpc, alt: 'HPC Tools' },
  ];

  // Section Cloud Solutions
  const cloudSolutions = [
    { src: fire, alt: 'Fire' },
    { src: aws, alt: 'AWS' },
    { src: azure, alt: 'Azure' },
  ];

  // Section Project Management
  const projectManagement = [
    { src: scrum, alt: 'Scrum' },
    { src: kanban, alt: 'Kanban' },
    { src: confluence, alt: 'Confluence' },
    { src: mbed, alt: 'MBED' },
  ];

  return (
    <div className="bg-white">
      <div className="relative py-16 bg-gradient-to-r from-indigo-600 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t('about_us')}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('about_us_subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t('professional_background')}
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                {t('professional_background_text1')}
              </p>
              <p className="mt-3 text-lg text-gray-500">
                {t('professional_background_text2')}
              </p>
              <p className="mt-3 text-lg text-gray-500">
                {t('professional_background_text3')}
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Professional workspace"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('our_software_tools')}</h2>
            <p className="mt-4 text-lg text-gray-500">
              {t('our_software_tools_subtitle')}
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center">{t('data_bi_tools')}</h3>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {dataAndBI.map((tool, index) => (
                <div key={index} className="flex justify-center">
                  <img src={tool.src} alt={tool.alt} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center">{t('process_automation')}</h3>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {automation.map((tool, index) => (
                <div key={index} className="flex justify-center">
                  <img src={tool.src} alt={tool.alt} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center">{t('development_coding')}</h3>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {development.map((tool, index) => (
                <div key={index} className="flex justify-center">
                  <img src={tool.src} alt={tool.alt} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center">{t('cloud_solutions')}</h3>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {cloudSolutions.map((tool, index) => (
                <div key={index} className="flex justify-center">
                  <img src={tool.src} alt={tool.alt} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center">{t('project_management')}</h3>
            <p className="mt-4 text-lg text-gray-500 text-center">
              {t('project_management_subtitle')}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {projectManagement.map((tool, index) => (
                <div key={index} className="flex justify-center">
                  <img src={tool.src} alt={tool.alt} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
