import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_bo1q4dv',
      'template_o20jimh',
      {
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'R0eJtPxaSs_64nMpn'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setShowModal(true);
      setFormData({ email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact_title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">{t('contact_email')}</h3>
              <p className="mt-2 text-base text-gray-500">
                cedrik.campeau@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <Phone className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">{t('contact_phone')}</h3>
              <p className="mt-2 text-base text-gray-500">
                +1 819 664-2230
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">{t('contact_location')}</h3>
              <p className="mt-2 text-base text-gray-500">
                Remote but from Gatineau, QC
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative bg-white shadow-xl rounded-lg">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                {/* Champ "name" supprimé */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('contact_form_email')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder={t('contact_form_email_placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    {t('contact_form_subject')}
                  </label>
                  <div className="mt-1">
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    >
                      <option value="" disabled>{t('contact_form_subject_placeholder')}</option>
                      <option value="Custom Software Development">{t('contact_form_subject_option1')}</option>
                      <option value="Data Analytics & Visualization">{t('contact_form_subject_option2')}</option>
                      <option value="Machine Learning Solutions">{t('contact_form_subject_option3')}</option>
                      <option value="Technical Consulting">{t('contact_form_subject_option4')}</option>
                      <option value="Process Chain Optimization">{t('contact_form_subject_option5')}</option>
                      <option value="Workflow Optimization">{t('contact_form_subject_option6')}</option>
                      <option value="Other">{t('contact_form_subject_option7')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t('contact_form_message')}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      placeholder={t('contact_form_message_placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                  >
                    {t('contact_form_submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto">
            <h3 className="text-xl font-bold text-gray-900">{t('contact_modal_title')}</h3>
            <p className="mt-4 text-gray-600">{t('contact_modal_message')}</p>
            <button
              onClick={closeModal}
              className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t('contact_modal_close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
