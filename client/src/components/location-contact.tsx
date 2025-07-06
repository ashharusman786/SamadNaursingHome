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
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("contact-title")}
            </h3>
            <p className="text-xl text-gray-600">{t("contact-subtitle")}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map Section */}
          <MapWithFallback
            embedUrl={mapUrls.embed}
            fallbackUrl={mapUrls.fallback}
            directionsUrl={mapUrls.directions}
            location={hospitalLocation}
          />

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="glassmorphism rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-teal-600" />
                  {t("contact-info")}
                </h4>

                <div className="space-y-6">
                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all duration-300 border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">{t("main-number")}</p>
                      <a
                        href="tel:+917860120688"
                        className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
                      >
                        +91 7860120688
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 transition-all duration-300 border border-red-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">{t("emergency-number")}</p>
                      <a
                        href="tel:+917860120688"
                        className="text-red-600 hover:text-red-700 transition-colors font-medium"
                      >
                        +91 7860120688
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <MessageCircle className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">{t("whatsapp")}</p>
                      <a
                        href="https://wa.me/917860120688?text=Hello%20Samad%20Nursing%20Home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors font-medium"
                      >
                        +91 7860120688
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">{t("email")}</p>
                      <a
                        href="mailto:samadnursighome@gmail.com"
                        className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                      >
                        samadnursighome@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glassmorphism rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  {t("quick-actions")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    asChild
                    className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-auto"
                  >
                    <a
                      href="https://wa.me/917860120688?text=Hello%20Samad%20Nursing%20Home%2C%20I%20would%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold">
                        {t("chat-whatsapp")}
                      </span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-auto"
                  >
                    <a
                      href="tel:+917860120688"
                      className="flex flex-col items-center gap-3"
                    >
                      <Phone className="w-6 h-6" />
                      <span className="font-semibold">
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
