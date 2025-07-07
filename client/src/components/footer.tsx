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
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  {t('nav-home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('doctors')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  {t('nav-doctors')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('timings')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  {t('nav-timings')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  {t('nav-gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base hover:translate-x-1 transform"
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
            <span>{t('privacy')}</span>
            <span className="mx-2 sm:mx-3">|</span>
            <span>{t('terms')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
