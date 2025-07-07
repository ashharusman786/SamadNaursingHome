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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("doctors-title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("doctors-subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {doctorsData.map((doctor) => {
            const availability = useDoctorAvailability(
              doctor.morningHours,
              doctor.eveningHours,
              doctor.days
            );

            return (
              <Card
                key={doctor.id}
                className="group glassmorphism rounded-3xl shadow-xl overflow-hidden card-hover border border-white/20 backdrop-blur-sm w-full"
              >
                <div className="relative">
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img  
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.specialty}`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    
                    {/* Fallback placeholder - hidden by default */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 hidden">
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                          <UserRound className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                        </div>
                        <p className="text-sm sm:text-base">Doctor Photo</p>
                      </div>
                    </div>
                    
                    {/* Availability overlay */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium shadow-lg ${
                        availability.isAvailable 
                          ? 'bg-green-500/90 text-white backdrop-blur-sm' 
                          : 'bg-red-500/90 text-white backdrop-blur-sm'
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
                
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 break-words hindi-text text-safe">
                    {doctor.name}
                  </h3>
                  <p className="text-teal-600 font-semibold mb-4 text-base sm:text-lg break-words hindi-text text-safe">
                    {doctor.specialty}
                  </p>
                  
                  {/* Availability status */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-gray-700 text-sm sm:text-base text-safe">{availability.statusText}</span>
                    </div>
                    <p className="text-sm text-gray-600 text-safe">{availability.nextAvailable}</p>
                  </div>
                  
                  {/* Working hours */}
                  <div className="mb-4 sm:mb-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-safe">Working Days: {doctor.days.join(', ')}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-medium text-blue-700 text-sm text-safe">Morning</div>
                        <div className="text-blue-600 text-sm text-safe">{doctor.morningHours}</div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg">
                        <div className="font-medium text-teal-700 text-sm text-safe">Evening</div>
                        <div className="text-teal-600 text-sm text-safe">{doctor.eveningHours}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact information */}
                  <div className="space-y-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${doctor.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group/email"
                    >
                      <Mail className="w-4 h-4 text-purple-600 group-hover/email:text-purple-700" />
                      <span className="text-purple-700 group-hover/email:text-purple-800 font-medium text-sm sm:text-base text-safe truncate">
                        {doctor.email}
                      </span>
                    </a>

                    <a
                      href={`tel:${doctor.mobile}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 transition-all duration-300 group/phone"
                    >
                      <Phone className="w-4 h-4 text-teal-600 group-hover/phone:text-teal-700" />
                      <span className="text-teal-700 group-hover/phone:text-teal-800 font-medium text-sm sm:text-base text-safe">
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
