import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// Añadimos 'initialSubject' como prop con un valor por defecto
const ContactModal = ({ isOpen, onClose, initialSubject = 'general' }) => {
  const { t } = useTranslation();
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject, // Se inicializa con la prop
    message: '',
  });

  // Sincronizamos el asunto cada vez que el modal se abre o cambia la prop
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
      }));
    }
  }, [isOpen, initialSubject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_3pie60l';
    const TEMPLATE_ID = 'template_y74b2d7';
    const PUBLIC_KEY = 'GT2AAH-89g-IG745h';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: initialSubject, message: '' });
        setIsSending(false);

        setTimeout(() => {
          if (isSubmitted) handleClose();
        }, 5000);
      },
      (error) => {
        alert('Error al enviar: ' + error.text);
        setIsSending(false);
      }
    );
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSubmitted(false), 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
      ></div>

      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden animate-fadeInUp">
        <div className="bg-[#ff4900] p-6 text-white flex justify-between items-center sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter">
              {t('contact.modal_title')}
            </h2>
            <p className="text-sm opacity-80">{t('contact.modal_subtitle')}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-4xl hover:scale-110 transition-transform p-2 leading-none"
          >
            &times;
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-8 custom-scrollbar">
          {!isSubmitted ? (
            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} key="form">
              <div className="space-y-1 text-left">
                <label className="text-xs font-bold uppercase text-slate-500">
                  {t('contact.form_name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-[#ff4900] dark:text-white"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-bold uppercase text-slate-500">
                  {t('contact.form_email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-[#ff4900] dark:text-white"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-bold uppercase text-slate-500">
                  {t('contact.form_subject')}
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none focus:border-[#ff4900] dark:text-white"
                >
                  <option
                    value="freelance"
                    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    {t('contact.subject_freelance')}
                  </option>
                  <option
                    value="recruiter"
                    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    {t('contact.subject_recruiter')}
                  </option>
                  <option
                    value="general"
                    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    {t('contact.subject_general')}
                  </option>
                </select>
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-bold uppercase text-slate-500">
                  {t('contact.form_message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-[#ff4900] dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-xl font-black text-lg shadow-xl transition-all duration-300 ${
                  isSending
                    ? 'bg-slate-400 cursor-not-allowed text-white'
                    : 'bg-[#ff4900] text-white hover:scale-105 active:scale-95 hover:brightness-110 shadow-[#ff4900]/20 cursor-pointer'
                }`}
              >
                {isSending ? t('contact.sending') : t('contact.submit_button')}
              </button>
            </form>
          ) : (
            <div className="py-10 text-center animate-fadeIn" key="success">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                <i className="fa-solid fa-circle-check text-5xl"></i>
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                {t('contact.success_title')}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-[280px] mx-auto text-lg leading-relaxed">
                {t('contact.success_text')}
              </p>
              <button
                onClick={handleClose}
                className="px-10 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                {t('contact.close_button')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
