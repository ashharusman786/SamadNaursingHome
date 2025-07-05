import { useTranslation } from '@/hooks/use-translation';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="glassmorphism rounded-3xl p-6 max-w-4xl mx-auto border border-white/20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full px-4 py-2 mb-4 border border-teal-100">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">Our Commitment</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent break-words hindi-text text-safe">
                {t('mission-title')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto break-words hindi-text text-safe">
                {t('mission-text')}
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group glassmorphism rounded-3xl p-6 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 my-4 md:my-6 lg:my-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Heart className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 text-center break-words hindi-text text-safe">{t('value-compassion')}</h4>
              <p className="text-gray-600 text-center leading-relaxed text-sm break-words hindi-text text-safe">{t('value-compassion-desc')}</p>
            </div>
            
            <div className="group glassmorphism rounded-3xl p-6 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 my-4 md:my-6 lg:my-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 text-center break-words hindi-text text-safe">{t('value-excellence')}</h4>
              <p className="text-gray-600 text-center leading-relaxed text-sm break-words hindi-text text-safe">{t('value-excellence-desc')}</p>
            </div>
            
            <div className="group glassmorphism rounded-3xl p-6 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 my-4 md:my-6 lg:my-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 text-center break-words hindi-text text-safe">{t('value-community')}</h4>
              <p className="text-gray-600 text-center leading-relaxed text-sm break-words hindi-text text-safe">{t('value-community-desc')}</p>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16">
            <div className="glassmorphism rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600 font-medium">
                    <span>{t('value-happy-patients')}</span>
                  </div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 font-medium">
                    <span>{t('value-emergency-care')}</span>
                  </div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-gray-600 font-medium">
                  <span>{t('value-years-experience')}</span>
                  </div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 font-medium">
                    <span>{t('value-patient-satisfaction')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
