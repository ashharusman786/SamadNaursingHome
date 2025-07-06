import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
      {/* Logo and tagline */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <Hospital className="text-white text-sm sm:text-lg" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            {t("hospital-name")}
          </h1>
          <p className="text-xs text-gray-600 hidden sm:block">{t("tagline")}</p>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <button onClick={() => handleNavClick("home")} className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group text-sm lg:text-base">
          {t("nav-home")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </button>
        <button onClick={() => handleNavClick("doctors")} className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group text-sm lg:text-base">
          {t("nav-doctors")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </button>
        <button onClick={() => handleNavClick("timings")} className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group text-sm lg:text-base">
          {t("nav-timings")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </button>
        <button onClick={() => handleNavClick("gallery")} className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group text-sm lg:text-base">
          {t("nav-gallery")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </button>
        <button onClick={() => handleNavClick("contact")} className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group text-sm lg:text-base">
          {t("nav-contact")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </button>
      </div>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden text-gray-700 hover:text-teal-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="text-lg" /> : <Menu className="text-lg" />}
      </Button>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800 rounded-b-xl mt-2">
          <div className="py-2 space-y-1">
            <button onClick={() => handleNavClick("home")} className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-lg w-full text-left transition-all duration-300 text-sm sm:text-base">
              {t("nav-home")}
            </button>
            <button onClick={() => handleNavClick("doctors")} className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-lg w-full text-left transition-all duration-300 text-sm sm:text-base">
              {t("nav-doctors")}
            </button>
            <button onClick={() => handleNavClick("timings")} className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-lg w-full text-left transition-all duration-300 text-sm sm:text-base">
              {t("nav-timings")}
            </button>
            <button onClick={() => handleNavClick("gallery")} className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-lg w-full text-left transition-all duration-300 text-sm sm:text-base">
              {t("nav-gallery")}
            </button>
            <button onClick={() => handleNavClick("contact")} className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-white/50 rounded-lg w-full text-left transition-all duration-300 text-sm sm:text-base">
              {t("nav-contact")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
