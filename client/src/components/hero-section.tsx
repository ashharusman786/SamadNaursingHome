import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { UserRound, MapPin } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden w-full"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-800 z-10 w-full">
        <div className="max-w-5xl mx-auto w-full">
          <div className="glassmorphism rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl bg-white/80 backdrop-blur-md w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full px-4 py-2 mb-6 sm:mb-8 border border-blue-200 text-blue-700 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {t('24/7-timings')}
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent break-words hindi-text text-safe w-full">
              {t('hero-title')}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-gray-700 max-w-4xl mx-auto hindi-text text-safe w-full leading-relaxed">
              {t('hero-subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full mb-8 sm:mb-12">
              <Button
                onClick={() => scrollToSection('doctors')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg inline-flex items-center gap-3 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <UserRound className="w-5 h-5" />
                {t('view-doctors')}
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg inline-flex items-center gap-3 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5" />
                {t('get-directions')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-200 w-full">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">5000+</div>
                <div className="text-sm sm:text-base font-medium text-gray-700">{t('value-happy-patients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2">24/7</div>
                <div className="text-sm sm:text-base font-medium text-gray-700">{t('value-emergency-care')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-700 mb-2">5+</div>
                <div className="text-sm sm:text-base font-medium text-gray-700">{t('value-years-experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
