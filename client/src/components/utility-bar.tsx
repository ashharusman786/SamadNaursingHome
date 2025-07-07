import LanguageToggle from './language-toggle';
import { Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export default function UtilityBar() {
  const { t } = useTranslation();
  return (
    <div className="sticky-header top-0 h-12 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 py-2 md:px-10 md:py-3 shadow-sm rounded-b-lg mt-1">
      <div className="flex items-center">
        <LanguageToggle />
      </div>
      <div className="flex items-center">
        <a
          href="tel:+917860120688"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-800 text-sm font-medium"
          aria-label="Emergency contact: +91 7860120688"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{t('emergency')}</span>
          <span className="sm:hidden">Emergency</span>
        </a>
      </div>
    </div>
  );
} 