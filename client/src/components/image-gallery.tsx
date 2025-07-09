import { useTranslation } from "@/hooks/use-translation";
import { useEffect, useRef } from "react";

export default function ImageGallery() {
  const { t } = useTranslation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Hospital Reception",
      title: t("reception"),
    },
    {
  
      src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Patient Room",
      title: t("patient-room"),
    },
    {
      src: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Medical Equipment",
      title: t("equipment"),
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Laboratory",
      title: t("laboratory"),
    },
    {
      src: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Pharmacy",
      title: t("pharmacy"),
    },
    {
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Waiting Area",
      title: t("waiting-area"),
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = document.querySelectorAll(".lazy-load");
    images.forEach((image) => {
      observerRef.current?.observe(image);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("gallery-title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("gallery-subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl card-hover border border-white/20 backdrop-blur-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover lazy-load transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
