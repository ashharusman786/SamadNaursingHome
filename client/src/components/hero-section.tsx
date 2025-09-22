import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { UserRound, MapPin } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center py-20 sm:py-32">
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.4)",
        }}
      />
      {/* Optional: colored overlay for extra contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-600/20 via-teal-500/10 to-blue-800/30" />
      {/* Main content */}
      <div className="relative z-20 max-w-4xl lg:max-w-6xl mx-auto text-center px-2 sm:px-4">
        <div className="relative container mx-auto px-0 sm:px-6 lg:px-8 text-center text-gray-800 z-10 w-full">
          <div className="max-w-4xl lg:max-w-6xl mx-auto w-full">
            <div className="glassmorphism rounded-3xl p-6 sm:p-10 md:p-16 lg:p-24 border border-white/30 shadow-2xl bg-white/90 backdrop-blur-xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full px-6 py-3 mb-8 sm:mb-10 border border-blue-200/50 text-blue-700 text-sm font-semibold shadow-md">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              {t('24/7-timings')}
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent break-words hindi-text text-safe w-full tracking-tight">
              {t('hero-title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 sm:mb-12 md:mb-16 text-gray-600 max-w-4xl mx-auto hindi-text text-safe w-full leading-relaxed font-medium">
              {t('hero-subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full mb-12 sm:mb-16">
              <Button
                onClick={() => scrollToSection('doctors')}
                className="btn-primary inline-flex items-center gap-3 w-full sm:w-auto text-base sm:text-lg"
              >
                <UserRound className="w-5 h-5" />
                {t('view-doctors')}
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center gap-3 w-full sm:w-auto text-base sm:text-lg"
              >
                <MapPin className="w-5 h-5" />
                {t('get-directions')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pt-12 sm:pt-16 border-t border-gray-200/50 w-full">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">5000+</div>
                <div className="text-base sm:text-lg font-semibold text-gray-600">{t('value-happy-patients')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-base sm:text-lg font-semibold text-gray-600">{t('value-emergency-care')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3">5+</div>
                <div className="text-base sm:text-lg font-semibold text-gray-600">{t('value-years-experience')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
