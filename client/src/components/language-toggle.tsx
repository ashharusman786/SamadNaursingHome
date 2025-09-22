import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { t, toggleLanguage } = useTranslation();

  return (
    <Button
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{t('language')}</span>
    </Button>
  );
}
