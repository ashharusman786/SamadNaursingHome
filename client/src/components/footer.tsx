import { useTranslation } from '@/hooks/use-translation';
import { Hospital, MapPin, Phone, Mail } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          <div>
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Hospital className="text-white text-xl sm:text-2xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold truncate">{t('hospital-name')}</h3>
                <p className="text-gray-300 text-sm sm:text-base truncate">{t('tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              {t('footer-description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('quick-links')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform inline-flex items-center gap-2"
                  aria-label="Navigate to home section"
                >
                  <span className="w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-4"></span>
                  {t('nav-home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('doctors')}
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform"
                  aria-label="Navigate to doctors section"
                >
                  {t('nav-doctors')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('timings')}
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform"
                  aria-label="Navigate to timings section"
                >
                  {t('nav-timings')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform"
                  aria-label="Navigate to gallery section"
                >
                  {t('nav-gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform"
                  aria-label="Navigate to contact section"
                >
                  {t('nav-contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('contact-info')}</h4>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-300 flex items-start space-x-3 text-sm sm:text-base">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-teal-400" />
                <span className="break-words leading-relaxed">{t('footer-address')}</span>
              </p>
              <p className="text-gray-300 flex items-center space-x-3 text-sm sm:text-base">
                <Phone className="w-5 h-5 flex-shrink-0 text-teal-400" />
                <span>+91 7860120688</span>
              </p>
              <p className="text-gray-300 flex items-center space-x-3 text-sm sm:text-base">
                <Mail className="w-5 h-5 flex-shrink-0 text-teal-400" />
                <span className="break-all">info@samadnursinghome.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-8 sm:pt-12 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            <span>{t('copyright')}</span>
            <span className="mx-2 sm:mx-3">|</span>
            <a href="/privacy-policy" className="hover:underline hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300" aria-label="View privacy policy">{t('privacy')}</a>
            <span className="mx-2 sm:mx-3">|</span>
            <a href="/terms-of-service" className="hover:underline hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300" aria-label="View terms of service">{t('terms')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
