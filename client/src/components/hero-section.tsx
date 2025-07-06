import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { UserRound, MapPin, Sparkles } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 animate-pulse" />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-500 rounded-full blur-3xl" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-indigo-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="relative container mx-auto px-4 text-center text-gray-800 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphic content container */}
          <div className="glassmorphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl bg-white/80 backdrop-blur-md">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">24/7 Healthcare Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent break-words hindi-text text-safe">
              {t('hero-title')}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 leading-relaxed text-gray-600 max-w-3xl mx-auto break-words hindi-text text-safe">
              {t('hero-subtitle')}
            </p>
            
            {/* Enhanced buttons with glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                onClick={() => scrollToSection('doctors')}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg inline-flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-500/20 backdrop-blur-sm w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <UserRound className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">{t('view-doctors')}</span>
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-white hover:border-gray-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg w-full sm:w-auto"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('get-directions')}</span>
              </Button>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1">5000+</div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">
                  <span>{t('value-happy-patients')}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-1">24/7</div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">
                  <span>{t('value-emergency-care')}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-700 mb-1">5+</div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">
                  <span>{t('value-years-experience')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
