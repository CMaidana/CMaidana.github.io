import enTranslations from "../i18n/en.js";
import esTranslations from "../i18n/es.js";

const ids = [
  'nav-bar-services',
  'nav-bar-about',
  'nav-bar-contact',
  'hero-title',
  'hero-title-2',
  'hero-title-mobile',
  'hero-title-mobile-2',
  'services-title',
  'about-title',
  'contact-title',
  'services-crm-box',
  'services-cms-box',
  'services-ecommerce-box',
  'about-text',
  'about-text-2',
  'submit-button',
  'cancel-button',
  'modal-title',
  'modal-text',
];

const placeholderIds = [
  'form-name',
  'form-phone',
  'form-email',
  'form-message',
];
window.addEventListener('DOMContentLoaded', event => {
  const languageSelect = document.getElementById('language-select');

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('slide-out');
      setTimeout(() => {
        element.textContent = value;
        element.classList.remove('slide-out');
        element.classList.add('slide-in');
        setTimeout(() => {
          element.classList.remove('slide-in');
        }, 50);
      }, 500);
    }
  }

  const setLanguage = (lang) => {
    const translations = lang === 'es' ? esTranslations : enTranslations;

    ids.forEach(
      (id) => setText(id, translations[id])
    );

    placeholderIds.forEach(
      (id) => document.getElementById(id) && (document.getElementById(id).placeholder = translations[id])
    );
  }
  const navLanguage = navigator.language? navigator.language.split('-')[0] : null;
  const userLanguage = navLanguage ?? localStorage.getItem('language') ?? 'en';
  
  languageSelect.value = userLanguage;
  //setLanguage(userLanguage);

  languageSelect.addEventListener('change', () => {
    console.log('Changeee');
    const value = languageSelect.value;
    setLanguage(value);
    localStorage.setItem('language', value);
  });

});
