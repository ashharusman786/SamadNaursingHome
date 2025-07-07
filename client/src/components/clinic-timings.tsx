import { useTranslation } from "@/hooks/use-translation";
import { useHospitalStatus } from "@/hooks/use-hospital-status";
import { Card, CardContent } from "@/components/ui/card";
import doctorsData from "@/data/doctors.json";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  registration: boolean;
  email: string;
  mobile: string;
  image: string;
  morningHours: string;
  eveningHours: string;
  days: string[];
  isAvailable: boolean;
};

export default function ClinicTimings() {
  const { t } = useTranslation();
  const isHospitalOpen = useHospitalStatus();

  const useDoctorAvailability = (doctor: Doctor): boolean => {
    const today = new Date();
    const todayName = today.toLocaleDateString("en-US", { weekday: "long" });

    if (!doctor.days.includes(todayName)) return false;

    const parseTime = (timeStr: string): number => {
      const [time, modifier] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;
      return hours * 60 + minutes;
    };

    const nowMinutes = today.getHours() * 60 + today.getMinutes();

    const checkSlot = (slot?: string) => {
      if (!slot) return false;
      const [start, end] = slot.split(" - ");
      return parseTime(start) <= nowMinutes && nowMinutes <= parseTime(end);
    };

    return checkSlot(doctor.morningHours) || checkSlot(doctor.eveningHours);
  };

  return (
    <section id="timings" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("timings-title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("timings-subtitle")}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* General Hospital Hours */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-3xl p-8 sm:p-10 lg:p-12 mb-8 sm:mb-12 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
                {t("hospital-hours")}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 min-w-[200px] sm:min-w-[250px] backdrop-blur-sm">
                  <p className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
                    {t("weekdays")}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    8:00 AM - 10:00 PM
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 min-w-[200px] sm:min-w-[250px] backdrop-blur-sm">
                  <p className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
                    {t("sunday")}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-8 sm:mt-10">
                <span
                  className={`inline-block px-8 py-4 rounded-full font-bold text-lg sm:text-xl shadow-lg ${
                    isHospitalOpen
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {isHospitalOpen ? t("open-now") : t("closed-now")}
                </span>
              </div>
            </div>
          </div>

          {/* Doctor-wise Timings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {doctorsData.slice(0, 2).map((doctor) => {
              const isAvailable = useDoctorAvailability(doctor);

              return (
                <Card
                  key={doctor.id}
                  className="glassmorphism rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 backdrop-blur-sm card-hover"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                      <h4 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                        {doctor.name}
                      </h4>
                      <p className="text-lg sm:text-xl text-teal-600 font-semibold">
                        {doctor.specialty}
                      </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      {doctor.morningHours && (
                        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex justify-between items-center">
                          <span className="text-lg sm:text-xl font-medium text-gray-700">
                            {t("morning")}
                          </span>
                          <span className="font-bold text-lg sm:text-xl text-gray-800">
                            {doctor.morningHours}
                          </span>
                        </div>
                      )}
                      {doctor.eveningHours && (
                        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex justify-between items-center">
                          <span className="text-lg sm:text-xl font-medium text-gray-700">
                            {t("evening")}
                          </span>
                          <span className="font-bold text-lg sm:text-xl text-gray-800">
                            {doctor.eveningHours}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 sm:mt-8 text-center">
                      <span
                        className={`px-6 py-3 rounded-full text-sm sm:text-base font-bold ${
                          isAvailable
                            ? "bg-green-100 text-green-800 border-2 border-green-300"
                            : "bg-red-100 text-red-800 border-2 border-red-300"
                        }`}
                      >
                        {isAvailable
                          ? "Available Now"
                          : "Currently Unavailable"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
