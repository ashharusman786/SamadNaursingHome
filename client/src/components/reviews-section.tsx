import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import reviewsData from '@/data/reviews.json';

export default function ReviewsSection() {
  const { t } = useTranslation();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400/50 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t('reviews-title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('reviews-subtitle')}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {reviewsData.map((review) => (
            <Card key={review.id} className="glassmorphism rounded-3xl p-6 sm:p-8 card-hover border border-white/20 backdrop-blur-sm shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="ml-3 text-gray-600 text-sm sm:text-base font-medium">{review.rating}</span>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base shadow-lg">
                    {review.avatar}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="font-semibold text-sm sm:text-base text-gray-800">{review.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
