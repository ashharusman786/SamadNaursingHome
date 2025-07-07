import UtilityBar from '@/components/utility-bar';
import Navigation from '@/components/navigation';
import HealthTipsCarousel from '@/components/HealthTipsCarousel';
import HeroSection from '@/components/hero-section';
import MissionSection from '@/components/mission-section';
import DoctorsDirectory from '@/components/doctors-directory';
import ClinicTimings from '@/components/clinic-timings';
import ImageGallery from '@/components/image-gallery';
import ReviewsSection from '@/components/reviews-section';
import LocationContact from '@/components/location-contact';
import Footer from '@/components/footer';
import FloatingChatbot from '@/components/floating-chatbot';
import ServiceCardsGrid from '@/components/ServiceCardsGrid';
import { useRevealOnScroll } from '@/lib/utils';

export default function Home() {
  const reveal1 = useRevealOnScroll<HTMLDivElement>();
  const reveal2 = useRevealOnScroll<HTMLDivElement>();
  const reveal3 = useRevealOnScroll<HTMLDivElement>();
  const reveal4 = useRevealOnScroll<HTMLDivElement>();
  const reveal5 = useRevealOnScroll<HTMLDivElement>();
  const reveal6 = useRevealOnScroll<HTMLDivElement>();
  const reveal7 = useRevealOnScroll<HTMLDivElement>();
  const reveal8 = useRevealOnScroll<HTMLDivElement>();
  const reveal9 = useRevealOnScroll<HTMLDivElement>();
  return (
    <div className="min-h-screen w-full bg-white">
      <UtilityBar />
      <Navigation />
      <main className="w-full">
        {/* Health Tips: prominent, just below nav */}
        <section ref={reveal1} className="reveal-init w-full flex flex-col items-stretch justify-center gap-4 px-4 pt-4 pb-2 max-w-3xl mx-auto">
          <HealthTipsCarousel />
        </section>
        <div ref={reveal2} className="reveal-init"><HeroSection /></div>
        <div ref={reveal3} className="reveal-init"><ServiceCardsGrid /></div>
        <div ref={reveal4} className="reveal-init"><MissionSection /></div>
        <div ref={reveal5} className="reveal-init"><DoctorsDirectory /></div>
        <div ref={reveal6} className="reveal-init"><ClinicTimings /></div>
        <div ref={reveal7} className="reveal-init"><ImageGallery /></div>
        <div ref={reveal8} className="reveal-init"><ReviewsSection /></div>
        <div ref={reveal9} className="reveal-init"><LocationContact /></div>
        <Footer />
        <FloatingChatbot />
      </main>
    </div>
  );
}
