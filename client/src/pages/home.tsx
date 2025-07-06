import UtilityBar from '@/components/utility-bar';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import MissionSection from '@/components/mission-section';
import DoctorsDirectory from '@/components/doctors-directory';
import ClinicTimings from '@/components/clinic-timings';
import ImageGallery from '@/components/image-gallery';
import ReviewsSection from '@/components/reviews-section';
import LocationContact from '@/components/location-contact';
import Footer from '@/components/footer';
import FloatingChatbot from '@/components/floating-chatbot';

export default function Home() {
  // Height: utility bar (48px) + nav bar (64px) = 112px, add a bit more for safety
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e6f7fa] via-[#b2f5ea] to-[#38b2ac] dark:from-gray-950 dark:via-gray-900 dark:to-[#22577a]">
      <UtilityBar />
      <div className="sticky top-12 z-40 w-full flex flex-col items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="w-full max-w-7xl mx-2 sm:mx-4 lg:mx-auto rounded-b-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-x border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg">
          <div className="px-3 sm:px-4 py-2 sm:py-3">
            <Navigation />
          </div>
        </div>
      </div>
      {/* Main Content with responsive top padding for both bars */}
      <div className="pt-28 sm:pt-32 md:pt-36 lg:pt-40">
        <HeroSection />
        <MissionSection />
        <DoctorsDirectory />
        <ClinicTimings />
        <ImageGallery />
        <ReviewsSection />
        <LocationContact />
        <Footer />
        <FloatingChatbot />
      </div>
    </div>
  );
}
