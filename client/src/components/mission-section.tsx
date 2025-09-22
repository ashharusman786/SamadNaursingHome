import { useTranslation } from '@/hooks/use-translation';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-white via-blue-50 to-teal-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 w-full">
            <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl w-full">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full px-6 py-3 mb-6 sm:mb-8 border border-blue-200/50 shadow-md">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-base font-semibold text-blue-700">
                  {t('mission-badge')}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent break-words hindi-text text-safe w-full tracking-tight">
                {t('mission-title')}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto break-words hindi-text text-safe w-full font-medium">
                {t('mission-text')}
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full">
            <div className="group modern-card p-8 sm:p-10 w-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                <Heart className="text-white text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-gray-800 text-center break-words hindi-text text-safe w-full">{t('value-compassion')}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg break-words hindi-text text-safe w-full">{t('value-compassion-desc')}</p>
            </div>
            
            <div className="group modern-card p-8 sm:p-10 w-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                <Award className="text-white text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-gray-800 text-center break-words hindi-text text-safe w-full">{t('value-excellence')}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg break-words hindi-text text-safe w-full">{t('value-excellence-desc')}</p>
            </div>
            
            <div className="group modern-card p-8 sm:p-10 w-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                <Users className="text-white text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-gray-800 text-center break-words hindi-text text-safe w-full">{t('value-community')}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg break-words hindi-text text-safe w-full">{t('value-community-desc')}</p>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 sm:mt-24 lg:mt-28 w-full">
            <div className="glassmorphism rounded-3xl p-8 sm:p-10 lg:p-16 border border-white/20 shadow-xl w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center w-full">
                <div className="group w-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">5000+</div>
                  <div className="text-gray-600 font-semibold text-base sm:text-lg">{t('value-happy-patients')}</div>
                </div>
                <div className="group w-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">24/7</div>
                  <div className="text-gray-600 font-semibold text-base sm:text-lg">{t('value-emergency-care')}</div>
                </div>
                <div className="group w-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">5+</div>
                  <div className="text-gray-600 font-semibold text-base sm:text-lg">{t('value-years-experience')}</div>
                </div>
                <div className="group w-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">100%</div>
                  <div className="text-gray-600 font-semibold text-base sm:text-lg">{t('value-patient-satisfaction')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
