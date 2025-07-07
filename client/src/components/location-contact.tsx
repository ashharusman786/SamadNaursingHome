import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MapWithFallback from "@/components/map-with-fallback";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";

export default function LocationContact() {
  const { t } = useTranslation();

  const hospitalLocation = {
    lat: 26.18918008058415,
    lng: 83.22167698219027,
    address: t("address-english")
  };

  const mapUrls = {
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.0576175541946!2d83.22167698219027!3d26.18918008058415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991a1da67192b05%3A0x8b48ca93fe9b6c21!2sSamad%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1751469448526!5m2!1sen!2sin",
    fallback: `https://www.google.com/maps?q=${hospitalLocation.lat},${hospitalLocation.lng}`,
    directions: "https://g.co/kgs/K9Cjyrm"
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-teal-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 w-full">
          <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("contact-title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("contact-subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto w-full">
          {/* Map Section */}
          <div className="w-full">
            <MapWithFallback
              embedUrl={mapUrls.embed}
              fallbackUrl={mapUrls.fallback}
              directionsUrl={mapUrls.directions}
              location={hospitalLocation}
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <Card className="glassmorphism rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 backdrop-blur-sm w-full">
              <CardContent className="p-0 w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-3">
                  <Phone className="w-6 h-6 text-teal-600" />
                  {t("contact-info")}
                </h3>

                <div className="space-y-4 sm:space-y-6 w-full">
                  <div className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all duration-300 border border-blue-100 w-full">
                    <div className="w-12 h-14 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <p className="font-semibold text-gray-700 text-sm sm:text-base">{t("main-number")}</p>
                      <a
                        href="tel:+917860120688"
                        className="text-teal-600 hover:text-teal-700 transition-colors font-medium text-sm sm:text-base break-all"
                      >
                        +91 7860120688
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 transition-all duration-300 border border-red-100 w-full">
                    <div className="w-12 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <p className="font-semibold text-gray-700 text-sm sm:text-base">{t("emergency-number")}</p>
                      <a
                        href="tel:+917860120688"
                        className="text-red-600 hover:text-red-700 transition-colors font-medium text-sm sm:text-base break-all"
                      >
                        +91 7860120688
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100 w-full">
                    <div className="w-12 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <MessageCircle className="text-white w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <p className="font-semibold text-gray-700 text-sm sm:text-base">{t("whatsapp")}</p>
                      <a
                        href="https://wa.me/917860120688?text=Hello%20Samad%20Nursing%20Home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors font-medium text-sm sm:text-base break-all"
                      >
                        +91 7860120688
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-100 w-full">
                    <div className="w-12 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <p className="font-semibold text-gray-700 text-sm sm:text-base">{t("email")}</p>
                      <a
                        href="mailto:samadnursighome@gmail.com"
                        className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-sm sm:text-base break-all"
                      >
                        samadnursighome@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glassmorphism rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 backdrop-blur-sm w-full">
              <CardContent className="p-0 w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  {t("quick-actions")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <Button
                    asChild
                    className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-4 sm:p-5 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-auto w-full"
                  >
                    <a
                      href="https://wa.me/917860120688?text=Hello%20Samad%20Nursing%20Home%2C%20I%20would%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 w-full"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold text-sm sm:text-base">
                        {t("chat-whatsapp")}
                      </span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white p-4 sm:p-5 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-auto w-full"
                  >
                    <a
                      href="tel:+917860120688"
                      className="flex flex-col items-center gap-3 w-full"
                    >
                      <Phone className="w-6 h-6" />
                      <span className="font-semibold text-sm sm:text-base">
                        {t("call-emergency")}
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
