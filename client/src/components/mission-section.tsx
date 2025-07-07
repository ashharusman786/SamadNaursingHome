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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full px-4 py-2 mb-4 sm:mb-6 border border-teal-100">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">
                  {t('mission-badge')}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent break-words hindi-text text-safe w-full">
                {t('mission-title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto break-words hindi-text text-safe w-full">
                {t('mission-text')}
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            <div className="group glassmorphism rounded-3xl p-6 sm:p-8 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Heart className="text-white text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center break-words hindi-text text-safe w-full">{t('value-compassion')}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base break-words hindi-text text-safe w-full">{t('value-compassion-desc')}</p>
            </div>
            
            <div className="group glassmorphism rounded-3xl p-6 sm:p-8 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="text-white text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center break-words hindi-text text-safe w-full">{t('value-excellence')}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base break-words hindi-text text-safe w-full">{t('value-excellence-desc')}</p>
            </div>
            
            <div className="group glassmorphism rounded-3xl p-6 sm:p-8 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="text-white text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center break-words hindi-text text-safe w-full">{t('value-community')}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base break-words hindi-text text-safe w-full">{t('value-community-desc')}</p>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 w-full">
            <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-xl w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center w-full">
                <div className="group w-full">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">5000+</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{t('value-happy-patients')}</div>
                </div>
                <div className="group w-full">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{t('value-emergency-care')}</div>
                </div>
                <div className="group w-full">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{t('value-years-experience')}</div>
                </div>
                <div className="group w-full">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{t('value-patient-satisfaction')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
