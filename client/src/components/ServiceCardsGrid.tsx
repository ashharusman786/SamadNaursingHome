import { Hospital, Syringe, HeartPulse, Ambulance } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { useMemo } from "react";

export default function ServiceCardsGrid() {
  const { t } = useTranslation();

  const services = useMemo(() => [
    {
      icon: <Ambulance className="w-12 h-12 text-medical-teal drop-shadow-md" />,
      title: t("Emergency-Service-title"),
      desc: t("Emergency-Service-description")
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-medical-purple drop-shadow-md" />,
      title: t("Cardiac Cares-service-title"),
      desc: t("Cardiac Cares-service-description")
    },
    {
      icon: <Syringe className="w-12 h-12 text-medical-orange drop-shadow-md" />,
      title: t("Vaccination-service-title"),
      desc: t("Vaccination-service-description")
    },
    {
      icon: <Hospital className="w-12 h-12 text-medical-green drop-shadow-md" />,
      title: t("Inpatient Wards-service-title"),
      desc: t("Inpatient Wards-service-description")
    }
  ], [t]);

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4">
      <h3 className="text-2xl font-bold text-medical-teal dark:text-medical-teal mb-8 text-center tracking-tight">{t("Our Services-title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative glassmorphism rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl border border-white/30 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 cursor-pointer group overflow-hidden"
            tabIndex={0}
            aria-label={service.title}
          >
            {/* Accent top border */}
            <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl ${i===0?'bg-medical-teal':i===1?'bg-medical-purple':i===2?'bg-medical-orange':'bg-medical-green'}`}></div>
            <div className="mb-4 mt-2 flex items-center justify-center">
              {service.icon}
            </div>
            <div className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2 tracking-tight group-hover:text-medical-teal transition-colors">
              {service.title}
            </div>
            {service.desc && <div className="text-gray-600 dark:text-gray-300 text-base mb-2">{service.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
} 