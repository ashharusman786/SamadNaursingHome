import { Hospital, Syringe, HeartPulse, Ambulance } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { useMemo } from "react";

export default function ServiceCardsGrid() {
  const { t } = useTranslation();

  const services = useMemo(() => [
    {
      icon: <Ambulance className="w-14 h-14 text-blue-600 drop-shadow-lg" />,
      title: t("Emergency-Service-title"),
      desc: t("Emergency-Service-description"),
      color: "blue"
    },
    {
      icon: <HeartPulse className="w-14 h-14 text-red-500 drop-shadow-lg" />,
      title: t("Cardiac Cares-service-title"),
      desc: t("Cardiac Cares-service-description"),
      color: "red"
    },
    {
      icon: <Syringe className="w-14 h-14 text-green-600 drop-shadow-lg" />,
      title: t("Vaccination-service-title"),
      desc: t("Vaccination-service-description"),
      color: "green"
    },
    {
      icon: <Hospital className="w-14 h-14 text-cyan-600 drop-shadow-lg" />,
      title: t("Inpatient Wards-service-title"),
      desc: t("Inpatient Wards-service-description"),
      color: "cyan"
    }
  ], [t]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400",
      red: "from-red-50 to-red-100 border-red-200 hover:border-red-400",
      green: "from-green-50 to-green-100 border-green-200 hover:border-green-400",
      cyan: "from-cyan-50 to-cyan-100 border-cyan-200 hover:border-cyan-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-20 px-4">
      <div className="text-center mb-16">
        <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 tracking-tight">{t("Our Services-title")}</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Comprehensive healthcare services designed with your well-being in mind</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className={`modern-card p-8 flex flex-col items-center text-center cursor-pointer group bg-gradient-to-br ${getColorClasses(service.color)} border-2 transition-all duration-500 hover:scale-105`}
            tabIndex={0}
            role="article"
            aria-label={`${service.title} - ${service.desc}`}
          >
            <div className="mb-6 flex items-center justify-center p-4 rounded-2xl bg-white/80 shadow-lg group-hover:shadow-xl transition-all duration-300">
              {service.icon}
            </div>
            <div className="font-bold text-xl text-gray-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
              {service.title}
            </div>
            {service.desc && <div className="text-gray-600 text-base leading-relaxed">{service.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
} 