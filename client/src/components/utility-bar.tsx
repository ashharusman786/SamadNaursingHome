import LanguageToggle from './language-toggle';
import { Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export default function UtilityBar() {
  const { t } = useTranslation();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/70 dark:border-gray-800/70 shadow-lg flex flex-row items-center justify-between px-3 sm:px-4 py-2 gap-2">
      <div className="flex items-center">
        <LanguageToggle />
      </div>
      <div className="flex items-center">
        <a
          href="tel:+917860120688"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-red-700/10 text-red-800 text-xs sm:text-sm font-medium border border-red-300 shadow-sm hover:bg-red-800/10 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-700 transition-colors"
          aria-label="Emergency contact: +91 7860120688"
        >
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-red-800" />
          <span className="hidden sm:inline">{t('emergency')}</span>
          <span className="sm:hidden">Emergency</span>
        </a>
      </div>
    </div>
  );
} 