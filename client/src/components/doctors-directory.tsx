import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, Calendar, CheckCircle, XCircle, UserRound } from "lucide-react";
import doctorsData from "@/data/doctors.json";
import { useDoctorAvailability } from "@/hooks/use-doctor-availabilty";

export default function DoctorsDirectory() {
  const { t } = useTranslation();

  return (
    <section id="doctors" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="glassmorphism rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
              {t("doctors-title")}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">{t("doctors-subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {doctorsData.map((doctor) => {
            const availability = useDoctorAvailability(
              doctor.morningHours,
              doctor.eveningHours,
              doctor.days
            );

            return (
              <Card
                key={doctor.id}
                className="group modern-card overflow-hidden w-full"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
                    <img  
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.specialty}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Hide the image on error and show the fallback placeholder
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    
                    {/* Fallback placeholder - hidden by default */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 hidden">
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <UserRound className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                        </div>
                        <p className="text-sm sm:text-base">Doctor Photo</p>
                      </div>
                    </div>
                    
                    {/* Availability overlay */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm ${
                        availability.isAvailable 
                          ? 'bg-green-500/95 text-white' 
                          : 'bg-red-500/95 text-white'
                      }`}>
                        {availability.isAvailable ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                        <span className="hidden sm:inline">{availability.isAvailable ? 'Available' : 'Closed'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800 break-words hindi-text text-safe">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-6 text-lg sm:text-xl break-words hindi-text text-safe">
                    {doctor.specialty}
                  </p>
                  
                  {/* Availability status */}
                  <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-700 text-base sm:text-lg text-safe">{availability.statusText}</span>
                    </div>
                    <p className="text-base text-gray-600 text-safe font-medium">{availability.nextAvailable}</p>
                  </div>
                  
                  {/* Working hours */}
                  <div className="mb-6 sm:mb-8 space-y-4">
                    <div className="flex items-center gap-3 text-base text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span className="text-safe font-medium">Working Days: {doctor.days.join(', ')}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-5">
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200/50">
                        <div className="font-semibold text-blue-700 text-base text-safe">Morning</div>
                        <div className="text-blue-600 text-base text-safe font-medium">{doctor.morningHours}</div>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-xl border border-teal-200/50">
                        <div className="font-semibold text-teal-700 text-base text-safe">Evening</div>
                        <div className="text-teal-600 text-base text-safe font-medium">{doctor.eveningHours}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact information */}
                  <div className="space-y-4">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${doctor.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group/email border border-purple-200/50 hover:border-purple-300/50"
                    >
                      <Mail className="w-5 h-5 text-purple-600 group-hover/email:text-purple-700" />
                      <span className="text-purple-700 group-hover/email:text-purple-800 font-semibold text-base sm:text-lg text-safe truncate">
                        {doctor.email}
                      </span>
                    </a>

                    <a
                      href={`tel:${doctor.mobile}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 transition-all duration-300 group/phone border border-teal-200/50 hover:border-teal-300/50"
                    >
                      <Phone className="w-5 h-5 text-teal-600 group-hover/phone:text-teal-700" />
                      <span className="text-teal-700 group-hover/phone:text-teal-800 font-semibold text-base sm:text-lg text-safe">
                        {doctor.mobile}
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
