import LanguageToggle from './language-toggle';
import { Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export default function UtilityBar() {
  const { t } = useTranslation();
  return (
    <div className="sticky-header top-0 h-14 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 flex items-center justify-between px-6 py-3 md:px-10 md:py-4 shadow-lg z-50">
      <div className="flex items-center">
        <LanguageToggle />
      </div>
      <div className="flex items-center">
        <a
          href="tel:+917860120688"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Emergency contact: +91 7860120688"
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">{t('emergency')}</span>
          <span className="sm:hidden">Emergency</span>
        </a>
      </div>
    </div>
  );
} 