import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { t, toggleLanguage } = useTranslation();

  return (
    <Button
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-sm"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{t('language')}</span>
    </Button>
  );
}
