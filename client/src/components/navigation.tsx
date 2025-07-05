import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glassmorphism border-b border-white/20 backdrop-blur-md' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Hospital className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                {t("hospital-name")}
              </h1>
              <p className="text-sm text-gray-600">{t("tagline")}</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <button
                onClick={() => handleNavClick("home")}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group"
              >
                {t("nav-home")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleNavClick("doctors")}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group"
              >
                {t("nav-doctors")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleNavClick("timings")}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group"
              >
                {t("nav-timings")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleNavClick("gallery")}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group"
              >
                {t("nav-gallery")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group"
              >
                {t("nav-contact")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
            
            {/* Emergency Contact */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-full border border-red-100">
              <Phone className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">{t("emergency")}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-teal-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glassmorphism border-t border-white/20 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <button
              onClick={() => handleNavClick("home")}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-xl w-full text-left transition-all duration-300"
            >
              {t("nav-home")}
            </button>
            <button
              onClick={() => handleNavClick("doctors")}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-xl w-full text-left transition-all duration-300"
            >
              {t("nav-doctors")}
            </button>
            <button
              onClick={() => handleNavClick("timings")}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-xl w-full text-left transition-all duration-300"
            >
              {t("nav-timings")}
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-xl w-full text-left transition-all duration-300"
            >
              {t("nav-gallery")}
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-xl w-full text-left transition-all duration-300"
            >
              {t("nav-contact")}
            </button>
            
            {/* Mobile Emergency Contact */}
            <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-700">{t("emergency")}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
