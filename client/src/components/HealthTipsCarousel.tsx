import { useTranslation } from '@/hooks/use-translation';
import { useState, useEffect, useMemo } from "react";
import { HeartPulse } from "lucide-react";

export default function HealthTipsCarousel() {
  const { t } = useTranslation();

  // Memoize tips so they update when the translation function changes (e.g., on language toggle)
  const tips = useMemo(() => [
    t('drink-water-tips'),
    t('wash-hands-tips'),
    t('get-sleep-tips'),
    t('eat-healthy-tips'),
    t('exercise-tips'),
    "Wash your hands regularly.",
    "Get at least 7-8 hours of sleep.",
    "Exercise for 30 minutes daily.",
    "Eat more fruits and vegetables.",
    "Take regular health checkups.",
  ], [t]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % tips.length), 5000);
    return () => clearInterval(timer);
  }, [tips.length]);

  return (
    <div className="glassmorphism rounded-xl p-4 border border-teal-200 shadow-lg my-4 max-w-md mx-auto flex items-center gap-3">
      <HeartPulse className="text-teal-600" />
      <span className="text-gray-700 font-medium">{tips[index]}</span>
    </div>
  );
} 